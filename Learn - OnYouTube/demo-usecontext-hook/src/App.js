import React from "react";
import "./styles.css";

import List from "./components/List";
import Counter from "./components/Counter";
import RamdomNumber from "./components/RandomNumber";

import { NumberProvider } from "./contexts/NumberContext";

const data = ["A", "B", "C"];

export default function App() {
  return (
    <NumberProvider>
      <div className="App">
        <RamdomNumber />
      </div>
    </NumberProvider>
  );
}
