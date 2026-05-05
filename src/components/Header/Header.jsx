import React from "react";
import logoImage from "../../assets/logo.svg";
import styles from "./Header.module.css";
import LocaleSelect from "../FormControls/LocaleSelect";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logoImage} alt='로고 이미지' />
        <LocaleSelect />
      </div>
    </header>
  );
}
