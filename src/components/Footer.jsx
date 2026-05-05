import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.text}>서비스 이용약관 | 개인정보 처리방침</div>
      </div>
    </footer>
  );
}
