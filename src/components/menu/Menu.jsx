import React from "react";
import styles from "./menu.module.css";
import MenuPost from "../menuPosts/MenuPost";
import MenuCategories from "../Menucategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What&apos;s Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPost withImage={false} />

      <h2 className={styles.subtitle}>Discover by Topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
    </div>
  );
};

export default Menu;
