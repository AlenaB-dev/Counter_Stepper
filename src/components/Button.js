import styles from "./Button.module.css";

function Button(props) {
  const { up, down, onIncrement, onDecrement } = props;
  return (
    <>
      <button onClick={onDecrement} className={styles.btn}>
        {down}
      </button>
      <button onClick={onIncrement} className={styles.btn}>
        {up}
      </button>
    </>
  );
}

export default Button;
