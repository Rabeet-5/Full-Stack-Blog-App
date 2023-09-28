import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPosts/MenuPost";
import MenuCategories from "../Menucategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      
      <MenuPost withImage={false} />
      {/* categories */}

      <h2 className={styles.subtitle}>Discover by Topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* container  */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Edittor's Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
