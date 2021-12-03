import React, { useState } from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
import MainContent from "./components/MainContent";

function App() {
  const [items, setItems] = useState({
    count: 0,
    show: false,
    addToCart: false,
  });
  return (
    <div className="App">
      <MenuItem items={items} setItems={setItems} />
      <MainContent items={items} setItems={setItems} />
    </div>
  );
}

export default App;
