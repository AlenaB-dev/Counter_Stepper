import styles from "./Button.module.css";

function Button(props) {
  const {} = props;
  return (
    <>
      <button className={styles.btn}>-</button>
      <button className={styles.btn}>+</button>
    </>
  );
}

export default Button;
