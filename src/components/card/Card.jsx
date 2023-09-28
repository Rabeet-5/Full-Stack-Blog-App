import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="postImage" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>28-09-2023</span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>{" "}
        </Link>
        <Link href={"/"}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;
