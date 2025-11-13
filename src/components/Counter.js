import styles from "./Counter.module.css";

function Counter({ count, step, setStep }) {
  return (
    <>
      <div className={styles.counter}>
        <h3 className={styles.count}>{count}</h3>

        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          placeholder="Inter your step"
          className={styles.stepInput}
        ></input>
      </div>
    </>
  );
}

export default Counter;
