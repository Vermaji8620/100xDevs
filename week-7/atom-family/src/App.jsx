import PropTypes from "prop-types";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./Atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
    </RecoilRoot>
  );
}

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      {currentTodo.title}
      {currentTodo.description}
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};
export default App;
