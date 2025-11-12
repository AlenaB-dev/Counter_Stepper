import { useState } from "react";
import styles from "./Counter.module.css";
import Button from "./Button";

function Counter() {
  const { count, setCounter } = useState();
  return (
    <>
      <h1>Counter and Stepper App</h1>
      <div className={styles.counter}>
        <Button />
        <input placeholder="Inter your step"></input>
      </div>
    </>
  );
}

export default Counter;
