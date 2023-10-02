import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to my Blog!
        <br />
        <b>Explore, Learn, and Get Inspired</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/blogpage.webp" alt="post" fill />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Dive into the World of Insights and Ideas
          </h2>
          <p className={styles.postDescription}>
            Embark on a journey of knowledge and creativity. Discover articles,
            stories, and experiences that will spark your curiosity and ignite
            your imagination. Join me in exploring a world of ideas, from
            technology to travel, from culture to creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
