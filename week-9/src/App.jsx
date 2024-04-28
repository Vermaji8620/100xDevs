import { useEffect, useState } from "react";

const useDebounce = (value) => {
  useEffect(() => {
    const val = setTimeout(() => {
      // console.log("changed");
      // fetch("");
    }, 500);

    return () => {
      clearTimeout(val);
    };
  }, [value]);
};

const App = () => {
  const [value, setValue] = useState("");

  useDebounce(value);

  return (
    <div>
      <input
        type="text"
        name="text"
        id="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default App;
