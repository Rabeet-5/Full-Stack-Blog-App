import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, items }) => {
  return (
    <div className={styles.container} key={key}>
      {items.img && (
        <div className={styles.imageContainer}>
          <Image
            src={items.img}
            alt="postImage"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {items.createdAt.substring(0, 10)}
          </span>
          <span className={styles.category}>{items.catSlug}</span>
        </div>
        <Link href={`/posts/${items.slug}`}>
          <h1>{items.title}</h1>{" "}
        </Link>
        <p className={styles.desc}>{items.desc.substring(0, 60)}</p>
        <Link href={`/posts/${items.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
