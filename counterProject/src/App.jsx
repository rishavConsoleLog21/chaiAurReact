import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("#d8b4fe");

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
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col items-center justify-center py-[20%]">
        <h1 className="text-white">Cornflakes aur React</h1>
        <br />
        <h3>Counter Value: {counter}</h3>
          <button
            className="rounded-2xl text-purple-300 px-2 py-2"
            style={{ backgroundColor: "blue" }}
            onClick={incrementCounter}
          >
            +
          </button>
          <br />
          <button
            className="rounded-2xl text-white py-2 px-2"
            style={{ backgroundColor: "red" }}
            onClick={decrementCounter}
          >
            -
          </button>
          <button onClick={()=>setColor("#d8b4fe")}>Reset Color</button>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("orange")}
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("#4B0082")}
              style={{ backgroundColor: "#4B0082" }}
            >
              Indigo
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("violet")}
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
