import React from "react";
import Header from "./Header";
import styles from "./Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className={styles.layout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
