import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetch("https://official-joke-api.appspot.com/random_joke").then(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
    });
  }

  return (
    <div className="App">
      <div className="card flex flex-column">
        <button className="ma1" onClick={handleClick}>
          count is {count}
        </button>
        <button className="ma1" onClick={() => setCount(0)}>
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
