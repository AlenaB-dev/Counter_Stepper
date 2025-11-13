import { useState } from "react";
import style from "./App.module.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Reset from "./components/Reset";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => setCount(count + step);
  const decrementCount = () => setCount(count - step);

  return (
    <div className={style.app}>
      <h1>Counter and Stepper App</h1>
      <div className={style.stepper}>
        <Button onDecrement={decrementCount} onIncrement={incrementCount} />
        <Counter count={count} step={step} setStep={setStep} />
      </div>
      <Reset />
    </div>
  );
}

export default App;
