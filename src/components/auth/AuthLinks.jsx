import React from "react";
import styles from "./style.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";

  return (
    <>
    <div className={styles.container}>
      {status === "notauthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
        <Link href={"/write"}>write</Link>
        <span className='link'>Logout</span>
        </>
      )}
    </div>
    </>
  );
};

export default AuthLinks;
