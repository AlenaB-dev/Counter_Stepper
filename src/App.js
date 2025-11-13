import { useState } from "react";
import styles from "./App.module.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => setCount(count + step);
  const decrementCount = () => setCount(count - step);

  const resetAll = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className={styles.app}>
      <h1>Counter & Stepper App</h1>
      <div className={styles.stepper}>
        <Button onDecrement={decrementCount} onIncrement={incrementCount} />
        <Counter
          count={count}
          step={step}
          setStep={setStep}
          resetAll={resetAll}
        />
      </div>
    </div>
  );
}

export default App;
