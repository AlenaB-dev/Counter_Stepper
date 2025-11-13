import { BsFillFileMinusFill, BsFillFilePlusFill } from "react-icons/bs";
import styles from "./Button.module.css";

function Button(props) {
  const { onIncrement, onDecrement } = props;
  return (
    <>
      <div className="buttons">
        <button onClick={onDecrement} className={styles.btn}>
          <BsFillFileMinusFill className={styles.icon} />
        </button>
        <button onClick={onIncrement} className={styles.btn}>
          <BsFillFilePlusFill className={styles.icon} />
        </button>
      </div>
    </>
  );
}

export default Button;
