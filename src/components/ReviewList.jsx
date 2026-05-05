import React from "react";
import ReviewListItem from "./ReviewListItem";
import styles from "./ReviewList.module.css";

export default function ReviewList({ items, onUpdate, onDelete }) {
  return (
    <ul className={styles.reviews}>
      {items.map((item) => (
        <li className={styles.review} key={item.id}>
          <ReviewListItem item={item} onUpdate={onUpdate} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
