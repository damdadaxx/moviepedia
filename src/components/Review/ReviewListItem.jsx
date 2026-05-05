import { useState } from "react";
import styles from "./ReviewListItem.module.css";
import ReviewForm from "./ReviewForm";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import useTranslate from "../../hooks/useTranslate";

export default function ReviewListItem({ item, onUpdate, onDelete }) {
  const t = useTranslate();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const dateString = new Date(item.createdAt).toLocaleDateString();

  const handleEditFormSubmit = (data) => {
    onUpdate(item.id, data);
    setIsEditModalOpen(false);
  };

  return (
    <div className={styles.list}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.imgUrl} alt={item.title} />
      </div>
      <div className={styles.contents}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.rating}>{item.rating}</p>
        <p className={styles.dateString}>{dateString}</p>
        <p className={styles.content}>{item.content}</p>
        <div className={styles.buttons}>
          <Button variant='ghost' onClick={() => setIsEditModalOpen(true)}>
            {t("edit button")}
          </Button>
          <Button variant='danger' onClick={() => onDelete(item.id)}>
            {t("delete button")}
          </Button>
        </div>
      </div>
      <Modal
        title={`${t("create review title")}`}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <ReviewForm review={item} onSubmit={handleEditFormSubmit} />
      </Modal>
    </div>
  );
}
