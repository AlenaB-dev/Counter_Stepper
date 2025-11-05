import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const { count, setCounter } = useState();
  return (
    <>
      <h1>Counter and Stepper App</h1>
      <div className={styles.counter}>
        <button className={styles.btn}>-</button>
        <button className={styles.btn}>+</button>
        <input placeholder="Inter your step"></input>
      </div>
    </>
  );
}

export default Counter;
