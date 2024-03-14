import "../src/App.css";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const Exp = ({ id }) => {
  // component code here

  const [loading, setLoading] = useState([]);
  useEffect(() => {
    //   setInterval(() => {
    (async () => {
      const data = await fetch(
        `https://sum-server.100xdevs.com/todos?id=${id}`
      );
      let res = await data.json();
      res = res.todos;
      setLoading(res);
    })();
    //   }, 3000);
  }, [id]);

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

const App = () => {
  return <Exp id="4" />;
};

Exp.propTypes = {
  id: PropTypes.string.isRequired,
};

export default App;
