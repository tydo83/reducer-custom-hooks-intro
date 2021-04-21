import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  function minusOne() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => addOne()}>+</button>
      <button onClick={() => minusOne()}>-</button>
    </div>
  );
}

export default App;
