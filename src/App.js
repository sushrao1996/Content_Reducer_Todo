import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoContext from "./Context/TodoContext";
import TodoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import { Container, Row, Col } from "reactstrap";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container
        fluid
        className="text-center"
        style={{
          backgroundColor: "#333",
          height: "100vh"
        }}
      >
        <Row>
          <Col md={6} className="offset-md-3">
            <h1 className="text-light">Todo App with Context API</h1>
            <Todos />
            <TodoForm />
          </Col>
        </Row>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
