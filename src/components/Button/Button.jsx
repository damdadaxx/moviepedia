import React from "react";
import styles from "./Button.module.css";

export default function Button({
  className = "",
  variant = "primary",
  ...props
}) {
  // className : props로 내려주는 className이 있을 수 있기 때문에 이렇게 추가
  // ...props : 스타일만 적용할거기 때문에 스프레드 문법으로 props를 받아서 html에서 사용하던 props를 다 받을 수 있음
  const classNames = `${styles.button} ${styles[variant]} ${className}`;
  return <button className={classNames} {...props} />;
}
