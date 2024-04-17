import { todosList } from "../../../data/data";
import { deleteTodos } from "../../../helper/help";

export default function handler(rec, res) {
  if (rec.method === "POST") {
    const { postTodo, todos } = rec.body;
    console.log(todos.length);
    const newTodo = { id: todos.length + 1, todos: postTodo };
    res.status(201).json(newTodo);
    return newTodo;
  } else if (rec.method === "GET") {
    res.status(200).json(todosList);
  } else if (rec.method === "DELETE") {
    const { todos, deleteTodo } = rec.body;
    deleteTodos(todos, deleteTodo);

    res.status(200).json(deleteTodos(todos, deleteTodo));
  }
}
