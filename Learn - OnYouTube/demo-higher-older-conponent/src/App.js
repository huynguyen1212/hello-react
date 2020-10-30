import React from "react";

import "./styles.css";
import AwesomeImage from "./components/AwesomeImage";
import HoverOpacity from "./components/HoverOpacity";
import withHoverOpacity from "./components/withHoverOpacity";

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.8);

export default function App() {
  return (
    <div className="App">
      <HoverOpacity>
        <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
      </HoverOpacity>
    </div>
  );
}
