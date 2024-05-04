import React, { useRef, useState } from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  // function for add
  const plus = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result + Number(inputRef.current.value);
    });
  };

  // function for minus
  const minus = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result - Number(inputRef.current.value);
    });
  };

  // function for times
  const times = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result * Number(inputRef.current.value);
    });
  };

  // function for devide
  const divide = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result / Number(inputRef.current.value);
    });
  };

  // reset input field
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  // reset result 
  const restResult = (e) => {
    e.preventDefault();
    setResult((result) => result * 0);
    inputRef.current.value = 0;
  }

  console.log(result);

  return (
    <div className="App">
      <h2 className="heading">Calculator App</h2>
      <form>
        <p className="result" ref={resultRef}>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          pattern="[0-9]"
          placeholder="Type a number"
          className="input"
        />
        <div className="button-container">
          <button className="button" onClick={plus}>Add</button>
          <button className="button" onClick={minus}>Subtract</button>
          <button className="button" onClick={times}>Multiply</button>
          <button className="button" onClick={divide}>Divide</button>
          <button className="button" onClick={resetInput}>Reset Input</button>
          <button className="button" onClick={restResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
