import { useState, useEffect } from "react";
import Compo from "./components/Compo";

const App = () => {
  // const [arr, setArr] = useState([
  //   {
  //     title: "first title",
  //     description: "first description",
  //   },
  //   {
  //     title: "second title",
  //     description: "second description",
  //   },
  //   {
  //     title: "third title",
  //     description: "third description",
  //   },
  // ]);

  // const [title, settitle] = useState("aaaaaaa");
  // const [description, setDescription] = useState("ddddddddddd");

  // const addtodo = () => {
  //   setArr([...arr, { title, description }]);
  // };

  const [res, setRes] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (data) => {
          const store = await data.json();
          setRes(store.todos);
        })
        .catch((err) => {
          console.log("some error occured", err);
        });
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Below is the thing</h1>
      {res.map((todo, index) => (
        <div key={index}>
          <Compo title={todo.title} description={todo.description} />
        </div>
      ))}
    </div>
  );
};

export default App;
