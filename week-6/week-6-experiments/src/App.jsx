import "./App.css";
import Compo from "./components/Compo";
import { useState } from "react";

export default function App() {
  return (
    <div style={{ padding: "10px" }}>
      <NewApp />
      <Compo game="thissss" />
      <Compo game="pppppppp" />
      <Compo game="zzzzz" />
    </div>
  );
}

export function NewApp() {
  const [prop, setProp] = useState("football");
  return (
    <div style={{ color: "white" }}>
      I am going to play
      <button
        style={{ fontSize: "20px", cursor: "pointer" }}
        onClick={() => {
          setProp(prop === "football" ? "cricket" : "football");
        }}
      >
        Click me
      </button>
      <Compo game={prop} />
    </div>
  );
}
