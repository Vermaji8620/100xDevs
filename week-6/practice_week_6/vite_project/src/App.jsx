import "../src/App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState([]);
  // console.log(loading);

  // useEffect(() => {
  //   setInterval(() => {
  //     (async () => {
  //       const data = await fetch("https://sum-server.100xdevs.com/todos");
  //       let res = await data.json();
  //       res = res.todos;
  //       setLoading(res);
  //     })();
  //   }, 3000);
  // }, []);

  return (
    <div>
      {/* <button onClick={func}>click me</button> */}
      {loading &&
        loading.map((item, index) => (
          <div key={index}>
            {
              <div>
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.completed}</div>
              </div>
            }
          </div>
        ))}
    </div>
  );
};

export default App;
