'use client'
import React, { useEffect } from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
    } else if (status === 'authenticated') {
      toast.success('Login Successful !');
      router.push('/');
    } else {
    }
  }, [status, router]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.socialButton} onClick={() => signIn('google')}>Sign in with Google</div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default Page;
