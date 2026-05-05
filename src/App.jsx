import { useState } from "react";

import mockItems from "./mock.json";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import ReviewList from "./components/Review/ReviewList";
import ReviewForm from "./components/Review/ReviewForm";

import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const [isCreateReviewOpen, setIsCreateReviewOpen] = useState(false);

  const handleCreate = (data) => {
    const now = new Date();

    const newItem = {
      id: items.length + 1,
      ...data,
      createdAt: now.valueOf(),
      updatedAt: now.valueOf(),
    };

    setItems([newItem, ...items]);
    setIsCreateReviewOpen(false);
  };

  const handleUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();
    const newItem = {
      ...items[index],
      ...data,
      updatedAt: now.valueOf(),
    };
    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
    ];

    setItems(newItems);
  };

  // 전체 데이터가 어디서 내려오는지 생각하면 App 컴포넌트에서 삭제 버튼을 만들어야 함
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  return (
    <Layout className={styles.main}>
      <header className={styles.header}>
        <div className={styles.orderBtns}>
          <Button
            variant={order === "createdAt" ? "primary" : "ghost"}
            onClick={() => setOrder("createdAt")}
          >
            최신순
          </Button>
          <Button
            variant={order === "rating" ? "primary" : "ghost"}
            onClick={() => setOrder("rating")}
          >
            베스트순
          </Button>
        </div>
        <Button onClick={() => setIsCreateReviewOpen(true)}>추가하기</Button>
      </header>
      <Modal
        title='리뷰 생성'
        isOpen={isCreateReviewOpen}
        onClose={() => setIsCreateReviewOpen(false)}
      >
        <ReviewForm onSubmit={handleCreate} />
      </Modal>
      <ReviewList
        items={sortedItems}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </Layout>
  );
}

export default App;
