import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

const Buttons = ({ count, setCount }) => {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

function Count({ count }) {
  return <div>{count}</div>;
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
};

Buttons.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.number.isRequired,
};

export default App;
