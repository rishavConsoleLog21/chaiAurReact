import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  //useState for counter
  const [counter, setCounter] = useState(1);
  //NOTE: Interview Question //HACK: Without using another state change the value of multipliedBy8
  let multipliedBy8 = counter * 8
  const multipledValue =() => {
    setCounter(counter + 1)
  }

  //useState for color
  const [color, setColor] = useState("#d8b4fe");

  //useState for password generator
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [specialChar, setSpecialChar] = useState(false);
  const [number, setNumber] = useState(false);

  //useRef for password input
  const passwordRef = useRef(null);

  //Funtion to generate password
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (specialChar) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, specialChar, number, setPassword]);

  //Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  }, [password]);

  //Function to copy password to clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  //Function to reset password
  const resetPassword = () => {
    setPassword("");
  };

  //useEffect for password generator
  useEffect(() => {
    generatePassword();
  }, [length, specialChar, number, generatePassword]);

  //Function for incrementing counter
  const incrementCounter = () => {
    if (counter === 20) {
      alert("Highest Number Reached");
    } else {
      setCounter(counter + 1);
    }
  };

  //Function for decrementing counter
  const decrementCounter = () => {
    if (counter === 1) {
      alert("Can not go beyond 1");
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
        <div className="flex flex-col items-center justify-center py-3">
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
          <br />
          <button style={{ backgroundColor: "green" }} className="rounded-md" onClick={multipledValue}>By 8</button>
          <p>Click above btn to get 8 Multiple: {multipliedBy8}</p>
        </div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-black border-violet-400 border shadow-lg"
              onClick={() => setColor("#d8b4fe")}
            >
              Reset Color
            </button>

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
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-purple-500">
          <h1 className="text-white text-center my-3">
            Generate Random Password
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-2">
            <input
              className="outline-none w-full py-1 px-3 rounded-md"
              type="text"
              placeholder="Generated Password"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className=" text-black bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 rounded-md"
            >
              Copy
            </button>
            <button
              onClick={resetPassword}
              className=" text-black bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md"
            >
              Reset
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                className="cursor-pointer"
                type="range"
                id="length"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={number}
                onChange={() => setNumber((prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={specialChar}
                onChange={() => setSpecialChar((prev) => !prev)}
              />
              <label htmlFor="numberInput">Special Char</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
