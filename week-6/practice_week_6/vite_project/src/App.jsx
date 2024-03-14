import "../src/App.css";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const Exp = ({ id }) => {
  const [loading, setLoading] = useState({});
  console.log(loading);
  useEffect(() => {
    //   setInterval(() => {
    (async () => {
      const data = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
      let res = await data.json();
      res = res.todo;
      console.log(res);
      setLoading(res);
    })();
    //   }, 3000);
  }, [id]);

  return (
    <div>
      {/* <button onClick={func}>click me</button> */}
      {/* {loading &&
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
        ))} */}
      {loading.title} <br /> {loading.description}
    </div>
  );
};

const Render = () => {
  const [val, setVal] = useState("1");
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "50px",
          marginTop: "30px",
        }}
      >
        <button value={1} onClick={(e) => setVal(e.target.value)}>
          button 1
        </button>
        <button value={2} onClick={(e) => setVal(e.target.value)}>
          button 2
        </button>
        <button
          value={3}
          onClick={(e) => {
            setVal(e.target.value);
          }}
        >
          button 3
        </button>
        <button value={4} onClick={(e) => setVal(e.target.value)}>
          button 4
        </button>
      </div>
      <Exp id={val} />
    </div>
  );
};

const App = () => {
  return <Render />;
};

Exp.propTypes = {
  id: PropTypes.string.isRequired,
};

export default App;
