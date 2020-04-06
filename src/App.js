import React from "react";
import Input from "./Input";
import Colors from "./colors";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tag Input</h1>
      <Input colors={Colors} />
    </div>
  );
}
