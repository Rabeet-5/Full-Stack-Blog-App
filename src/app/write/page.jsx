"use client";
import React from "react";
import styles from "./write.module.css";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/coding.png" alt="" width={20} height={20} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell Your Story ..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Write;
