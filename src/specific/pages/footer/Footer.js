import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.wrapper}>
    <h2 className={styles.title}>
      <a href="#NavTop">Back to Top</a>
    </h2>
    <h3 className={styles.sub}>
      <Link to="/gallery">View the Gallery</Link>
    </h3>

    <div className={styles.socialMedia}>
      <div className={styles.socialMediaItems}>
        <a href="/">linkedIn</a>
      </div>

      <div className={styles.socialMediaItems}>
        <a href="/">Twitter</a>
      </div>

      <div className={styles.socialMediaItems}>
        <a href="/">Email</a>
      </div>
    </div>

    <p className={styles.copy}>All photos @copyright Mint 2018</p>
    <p className={styles.ti}>Website by Thunder Island</p>
  </footer>
);

export default Footer;
