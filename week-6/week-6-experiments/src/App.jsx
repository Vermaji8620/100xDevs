import "./App.css";
import Compo from "./components/Compo";
import { useState } from "react";

function App() {
  const [prop, setProp] = useState("football");
  return (
    <>
      I am going to play the game{" "}
      <button
        style={{ fontSize: "20px", cursor: "pointer" }}
        onClick={() => {
          setProp(prop === "football" ? "cricket" : "football");
        }}
      >
        Click me
      </button>
      <Compo game={prop} />
    </>
  );
}
export default App;
