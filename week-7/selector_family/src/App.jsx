import { todosAtomFamily } from "../Atoms";
import PropTypes from "prop-types";
import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
    </RecoilRoot>
  );
}

const Todo = ({ id }) => {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  return (
    <div>
      {todo.title}
      {todo.description}
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
