import { todosAtomFamily } from "../Atoms";
import PropTypes from "prop-types";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
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
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  // const [todo, settodo] = useRecoilStateLoadable(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  // this userecoilstateloadable and useRecoilValueLoadable returns contents and state..............
  return (
    // <div>
    //   {todo.title}
    //   {todo.description}
    // </div>
    <div>
      {todo.state === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div>
          {todo.state === "hasError" ? (
            <div>Error Loading page</div>
          ) : (
            <div>
              {todo.contents.title}
              {todo.contents.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
