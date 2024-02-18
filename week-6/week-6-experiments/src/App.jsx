import { useState } from "react";
import Compo from "./components/Compo";

const App = () => {
  const [arr, setArr] = useState([
    {
      title: "first title",
      description: "first description",
    },
    {
      title: "second title",
      description: "second description",
    },
    {
      title: "third title",
      description: "third description",
    },
  ]);

  const [title, settitle] = useState("aaaaaaa");
  const [description, setDescription] = useState("ddddddddddd");

  const addtodo = () => {
    setArr([...arr, { title, description }]);
  };

  return (
    <div>
      below is the rendering
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={addtodo} style={{ cursor: "pointer" }}>
        Click
      </button>
      <br />
      <br />
      <br />
      {arr.map((eacharr, index) => (
        <div key={index}>
          <Compo title={eacharr.title} description={eacharr.description} />
        </div>
      ))}
    </div>
  );
};

export default App;
