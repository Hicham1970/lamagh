import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2025, All Rights Reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="facebook Logo"
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image
          src="/2.png"
          alt="instagram Logo"
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image
          src="/3.png"
          alt="tweeter Logo"
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image src="/4.png" alt="youtube Logo" width={15} height={15} className={styles.icons}/>
      </div>
    </div>
  );
};

export default Footer;
