import styles from "./Counter.module.css";

function Counter({ count, step, setStep, resetAll }) {
  return (
    <>
      <div className={styles.counter}>
        <h3 className={styles.count} onClick={resetAll}>
          {count}
        </h3>

        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
          placeholder="Enter step"
          className={styles.stepInput}
        ></input>
        <button onClick={resetAll} className={styles.resetBtn}>
          Reset All
        </button>
      </div>
    </>
  );
}

export default Counter;
