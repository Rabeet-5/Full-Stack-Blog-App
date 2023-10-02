'use client'
import React from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const { data, status } = useSession();
  const router = useRouter()
  console.log(data, status);


  if(status === 'loading'){
    return <div className={styles.loading}>loading....</div>
  }
  if(status === 'authenticated'){
    toast.success(' Login Successfull !')
    router.push('/')
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.socialButton} onClick={()=>signIn('google')}>Sign in with Google</div>
         <Toaster />
        </div>
      </div>
    </>
  );
};

export default page;
