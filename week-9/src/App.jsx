import { useEffect } from "react";
import { useState } from "react";

const useInterval = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const iner = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(iner);
    };
  }, [timer]);

  return timer;
};

const App = () => {
  const timer = useInterval();

  return <div>Timer is at {timer}</div>;
};

export default App;
