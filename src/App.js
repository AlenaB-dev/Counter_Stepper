import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => setCount(count + step);
  const decrementCount = () => setCount(count - step);

  return (
    <div className="App">
      <h1>Counter and Stepper App</h1>
      <Counter count={count} step={step} setStep={setStep} />
      <Button
        up="+"
        down="-"
        onDecrement={decrementCount}
        onIncrement={incrementCount}
      />
    </div>
  );
}

export default App;
