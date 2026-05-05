import React, { useEffect, useRef } from "react";
import Button from "./Button";
import placeholderImage from "../assets/placeholder.png";
import styles from "./ReviewForm.module.css";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

export default function ReviewForm({
  review = { title: "", imgUrl: "", rating: 1, content: "" },
  onSubmit,
}) {
  const inputRef = useRef(null);
  const submit = (formData) => {
    // fromEntries() : JS 객체로 변환
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} action={submit}>
      <div className={styles.inner}>
        <img
          className={styles.image}
          src={placeholderImage}
          alt={review.title}
        />
        <div className={styles.content}>
          <div className={styles.titleRating}>
            <Input
              className={styles.title}
              name='title'
              defaultValue={review.title}
              placeholder='제목을 입력하세요.'
              ref={inputRef}
            />
            <Select name='rating' defaultValue={review.rating}>
              <option value={1}>⭐️</option>
              <option value={2}>⭐️⭐️</option>
              <option value={3}>⭐️⭐️⭐️</option>
              <option value={4}>⭐️⭐️⭐️⭐️</option>
              <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
            </Select>
          </div>
          <Textarea
            className={styles.textarea}
            name='content'
            defaultValue={review.content}
            placeholder='내용을 입력하세요.'
          />
        </div>
      </div>
      <Button className={styles.button}>완료</Button>
    </form>
  );
}
