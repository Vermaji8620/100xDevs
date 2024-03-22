import { atomFamily } from "recoil";
import { TODOS } from "./Todossss.jsx";

// atom family returns a new atom every time A NEW OBJECT IS DEMANDED, but returns a cache value, once the same item is demanded, that was demanded anytime before.

// it takes a key and a default value which in this case is a function rather than being a number of object that has some hardcoded values
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((eachTodo) => eachTodo.id == id);
  },
});
