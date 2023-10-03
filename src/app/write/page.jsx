"use client";
import React, { useEffect } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const storage = getStorage(app);

const Write = () => {
  const { status } = useSession();
  const router = useRouter();
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const upload = () => {
      const imageName = new Date().getTime + file.name;
      const storageRef = ref(storage, imageName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              // console.log("Upload is paused");
              break;
            case "running":
              // console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>loading....</div>;
  }
  if (status === "unauthenticated") {
    toast.error("Please login to write a blog ");
    router.push("/login");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "coding",
      }),
    });
    toast.success("Blog Posted Successfully !");
    console.log(response);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={20} height={20} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
          </div>
        )}
        <textarea
          name=""
          placeholder="Tell your story ..."
          className={styles.textArea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows="4" 
          cols="50"
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
      <Toaster />
    </div>
  );
};

export default Write;
