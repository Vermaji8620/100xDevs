import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} />
      <Buttons />
    </div>
  );
}

const Buttons = () => {
  return (
    <div>
      <button onClick={()=>{

      }}>Increase</button>
      <button onClick={()=>{

      }}>Decrease</button>
    </div>
  );
};

function Count({ count }) {
  return <div>{count}</div>;
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
};

export default App;
