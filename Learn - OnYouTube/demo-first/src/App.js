import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";

export default function App() {
  return (
    <div className="App">
      <Card imageUrl="https://picsum.photos/200/300">
        <p>Card body</p>
      </Card>

      <Card2 imageUrl="https://picsum.photos/200/350">
        <p>Card body 2</p>
      </Card2>
    </div>
  );
}
