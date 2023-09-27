import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image
              src="/style.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Style
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.fashion}`}>
            <Image
              src="/fashion.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Fashion
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.coding}`}>
            <Image
              src="/coding.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Coding
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.food}`}>
            <Image
              src="/food.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Food
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.fashion}`}>
            <Image
              src="/fashion.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Travel
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.culture}`}>
            <Image
              src="/fashion.png"
              width={32}
              height={32}
              className={styles.image}
            />
            Culture
          </Link>
      </div>
    </div>
  );
};

export default CategoryList;
