import React from "react";
import "./styles.css";

import List from "./components/List";
import Counter from "./components/Counter";

import NumberProvider from "./components/NumberProvider";
import NumberContext from "./contexts/NumberContext";

const data = ["A", "B", "C"];

export default function App() {
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>
          )}
        </NumberContext.Consumer>

        {/* <List data={data} render={(item) => <div>{item}</div>} />
      <List data={data} render={(item) => <div>- {item}</div>} />
    <List data={data} render={(item) => <div>+ {item}</div>} /> */}

        <Counter>{({ count }) => <h1>{count}</h1>}</Counter>
      </div>
    </NumberProvider>
  );
}
