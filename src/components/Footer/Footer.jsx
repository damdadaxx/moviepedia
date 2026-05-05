import React from "react";
import styles from "./Footer.module.css";
import useTranslate from "../../hooks/useTranslate";

export default function Footer() {
  const t = useTranslate();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.text}>
          {`${t("terms of service")} | ${t("privacy policy")}`}
        </div>
      </div>
    </footer>
  );
}
