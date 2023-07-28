import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy;copywrite reserved 2023</div>
      <div className={styles}>
        <Image src="/1.png" width={15} height={15} alt="facebook" />
        <Image src="/2.png" width={15} height={15} alt="instagram" />
        <Image src="/3.png" width={15} height={15} alt="twitter" />
        <Image src="/4.png" width={15} height={15} alt="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
