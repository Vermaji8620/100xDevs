import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";

const App = () => {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
};

const Count = () => {
  return (
    <div>
      {console.log("done")}
      <CountRenderer />
      <Buttons />
      <Show />
    </div>
  );
};

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count} </b>
    </div>
  );
};

const Buttons = () => {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("re-rendered");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase </button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease </button>
    </div>
  );
};

const Show = () => {
  const count = useRecoilValue(countAtom);
  return <div>{count % 2 == 0 && <div>It is even</div>}</div>;
};

export default App;
  