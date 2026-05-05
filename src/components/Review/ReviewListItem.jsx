import { useState } from "react";
import styles from "./ReviewListItem.module.css";
import ReviewForm from "./ReviewForm";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function ReviewListItem({ item, onUpdate, onDelete }) {
  const dateString = new Date(item.createdAt).toLocaleDateString();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
            수정
          </Button>
          <Button variant='danger' onClick={() => onDelete(item.id)}>
            삭제
          </Button>
        </div>
      </div>
      <Modal
        title='리뷰 생성'
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <ReviewForm review={item} onSubmit={handleEditFormSubmit} />
      </Modal>
    </div>
  );
}
