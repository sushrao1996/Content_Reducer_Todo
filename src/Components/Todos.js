import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import TodoContext from "../Context/TodoContext";
import { FaCheckDouble } from "react-icons/fa";
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <ListGroup className="mt-4 mb-2">
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            className="float-right"
            onClick={() =>
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id
              })
            }
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
