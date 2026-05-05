import styles from "./Select.module.css";

export default function Select({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classNames = `${styles.select} ${styles[variant]} ${className}`;

  return (
    <select className={classNames} {...props}>
      {children}
    </select>
  );
}
