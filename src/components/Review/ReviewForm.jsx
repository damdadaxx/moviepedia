import { useActionState, useEffect, useRef } from "react";
import styles from "./ReviewForm.module.css";
import Button from "../Button/Button";
import Input from "../FormControls/Input";
import Select from "../FormControls/Select";
import Textarea from "../FormControls/Textarea";
import useTranslate from "../../hooks/useTranslate";
import FileInput from "../FormControls/FileInput";

export default function ReviewForm({
  review = { title: "", imgUrl: "", rating: 1, content: "" },
  onSubmit,
}) {
  const t = useTranslate();

  const inputRef = useRef(null);

  /*
  - state: 현재 error 상태 참조
  - formAction: action 값
  - isPending: 제출중인지의 상태값
  */
  const [state, formAction, isPending] = useActionState(
    async (prevState, data) => {
      try {
        await onSubmit(data);
        return { error: null };
      } catch (error) {
        return { error };
      }
    },
    { error: null },
  );

  // const submit = (formData) => {
  //   // fromEntries() : JS 객체로 변환
  //   const data = Object.fromEntries(formData.entries());
  //   onSubmit(data);
  // };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.inner}>
        <FileInput name='imgFile' initialPreview={review.imgUrl} />
        <div className={styles.content}>
          <div className={styles.titleRating}>
            <Input
              className={styles.title}
              name='title'
              defaultValue={review.title}
              placeholder={t("enter the title")}
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
            placeholder={t("enter the content")}
          />
        </div>
      </div>
      <Button className={styles.button} disabled={isPending}>
        {t("submit button")}
      </Button>
      {state.error && <div>오류가 발생했습니다.</div>}
    </form>
  );
}
