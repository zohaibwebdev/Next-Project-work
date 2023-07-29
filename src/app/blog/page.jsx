import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/websites.jpg"
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>description</p>
      </div>
    </div>
  );
};

export default Blog;
