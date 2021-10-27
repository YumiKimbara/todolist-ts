import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todo-context";
import classes from "./Todos.module.css";

//Todoはtypeとしても扱うことができる。items: Todoとすることで、Todoのobject(idとtext)の内容を当てはめることができる
const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
