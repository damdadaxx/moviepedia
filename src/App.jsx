import { useEffect, useState } from "react";

import useTranslate from "./hooks/useTranslate";
import axios from "./utils/axios";

import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import ReviewList from "./components/Review/ReviewList";
import ReviewForm from "./components/Review/ReviewForm";

import styles from "./App.module.css";

const LIMIT = 10;

function App() {
  const t = useTranslate();

  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [isCreateReviewOpen, setIsCreateReviewOpen] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  // const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoad = async (orderParams) => {
    const response = await axios.get("/film-reviews", {
      params: { order: orderParams, limit: LIMIT },
    });
    const { reviews, paging } = response.data;
    setItems(reviews);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    const response = await axios.get("/film-reviews", {
      params: { order, offset: items.length, limit: LIMIT },
    });
    const { reviews, paging } = response.data;
    setItems((prevItems) => [...prevItems, ...reviews]);
    setHasNext(paging.hasNext);
    // setItems([...items, ...reviews]); // 비동기 상태에서 최신 값을 참조 어려움
  };

  const handleCreate = async (data) => {
    // const now = new Date();

    // const newItem = {
    //   id: items.length + 1,
    //   ...data,
    //   createdAt: now.valueOf(),
    //   updatedAt: now.valueOf(),
    // };

    const response = await axios.post("/film-reviews", data);
    const { review } = response.data;

    setItems((prevItems) => [review, ...prevItems]);
    setIsCreateReviewOpen(false);
    // setItems([newItem, ...items]);
  };

  const handleUpdate = async (id, data) => {
    const response = await axios.patch(`/film-reviews/${id}`, data);
    const { review } = response.data;

    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);

      return [
        ...prevItems.slice(0, index),
        review,
        ...prevItems.slice(index + 1),
      ];
    });
  };

  // 전체 데이터가 어디서 내려오는지 생각하면 App 컴포넌트에서 삭제 버튼을 만들어야 함
  const handleDelete = async (id) => {
    await axios.delete(`/film-reviews/${id}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <Layout className={styles.main}>
      <header className={styles.header}>
        <div className={styles.orderBtns}>
          <Button
            variant={order === "createdAt" ? "primary" : "ghost"}
            onClick={() => setOrder("createdAt")}
          >
            {t("sort by latest")}
          </Button>
          <Button
            variant={order === "rating" ? "primary" : "ghost"}
            onClick={() => setOrder("rating")}
          >
            {t("sort by best")}
          </Button>
        </div>
        <Button onClick={() => setIsCreateReviewOpen(true)}>
          {t("create button")}
        </Button>
      </header>

      <div className={styles.contents}>
        <ReviewList
          items={items}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        {hasNext && (
          <Button variant='loadMore' onClick={handleLoadMore}>
            더보기
          </Button>
        )}
      </div>

      <Modal
        title={`${t("create review title")}`}
        isOpen={isCreateReviewOpen}
        onClose={() => setIsCreateReviewOpen(false)}
      >
        <ReviewForm onSubmit={handleCreate} />
      </Modal>
    </Layout>
  );
}

export default App;
