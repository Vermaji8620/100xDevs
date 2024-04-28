import axios from "axios";
import { useEffect, useState } from "react";

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(todos);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    // lets now say that the n is changed, now the previous n that was already running needs to be stopped for the new n to take place (we should not have two clocks running at the same time)and have all the effects, so need to clear the earlier intervals--- so use unmounting concept
    return () => {
      clearInterval(value);
    };

    // flow for mounting and unmounting ----
    // for the first time when the useffect is run inside this function, the unmounting concept does not happen, but when the n value is changed, first it goes to the demounting to remove any interval that is already running and then, goes on to mount the newly created thing
  }, [n]);

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
