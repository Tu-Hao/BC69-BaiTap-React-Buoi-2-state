import { useState } from "react";
import "./App.css";
import { BTReact } from "./BTReact/BTReact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BTReact />
    </div>
  );
}

export default App;
