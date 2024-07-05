import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter === 20) {
      alert("Highest Number Reached");
    } else {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter === 0) {
      alert("Can not go beyond 0");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h1>Cornflakes aur React</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={incrementCounter}>Add</button>
        <br />
        <button onClick={decrementCounter}>Subtract</button>
      </div>
    </>
  );
}

export default App;
