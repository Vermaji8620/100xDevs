import axios from "axios";
import { useEffect, useState } from "react";

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(todos);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }, []);

  return { todos, loading };
};

const App = () => {
  const { todos, loading } = useTodos(3);
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <Track todo={todo} />
          </div>
        ))
      )}
    </div>
  );
};

import PropTypes from "prop-types";

const Track = ({ todo }) => {
  return (
    <div>
      {todo.title}
      {todo.description}
    </div>
  );
};

Track.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default App;
