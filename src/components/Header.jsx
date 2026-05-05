import React from "react";
import logoImage from "../assets/logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logoImage} alt='로고 이미지' />
        <select className={styles.select}>
          <option value='ko'>한국어</option>
          <option value='en'>영어</option>
        </select>
      </div>
    </header>
  );
}
