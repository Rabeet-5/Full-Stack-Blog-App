import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MenuPost.module.css";

const MenuPost = ({ withImage }) => {
  return (
    // <div className={styles.items}>
    //     <Link href={"/"} className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.travel}`}>
    //           Travel
    //         </span>
    //         <h3 className={styles.postTitle}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    //           nulla asperiores{" "}
    //         </h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>John Doe</span>
    //           <span className={styles.date}>20-9-2023</span>
    //         </div>
    //       </div>
    //     </Link>

    //     <Link href={"/"} className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.fashion}`}>
    //           Fashion
    //         </span>
    //         <h3 className={styles.postTitle}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    //           nulla asperiores{" "}
    //         </h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>John Doe</span>
    //           <span className={styles.date}>20-9-2023</span>
    //         </div>
    //       </div>
    //     </Link>

    //     <Link href={"/"} className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.coding}`}>
    //           Coding
    //         </span>
    //         <h3 className={styles.postTitle}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    //           nulla asperiores{" "}
    //         </h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>John Doe</span>
    //           <span className={styles.date}>20-9-2023</span>
    //         </div>
    //       </div>
    //     </Link>

    //     <Link href={"/"} className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.food}`}>Food</span>
    //         <h3 className={styles.postTitle}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    //           nulla asperiores{" "}
    //         </h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>John Doe</span>
    //           <span className={styles.date}>20-9-2023</span>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
   
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/coding.png"
                fill
                alt="coding"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nulla asperiores{" "}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>20-9-2023</span>
            </div>
          </div>
        </Link>

        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/coding.png"
                fill
                alt="coding"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nulla asperiores{" "}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>20-9-2023</span>
            </div>
          </div>
        </Link>

        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/coding.png"
                fill
                alt="coding"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nulla asperiores{" "}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>20-9-2023</span>
            </div>
          </div>
        </Link>

        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/coding.png"
                fill
                alt="coding"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nulla asperiores{" "}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>20-9-2023</span>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default MenuPost;
