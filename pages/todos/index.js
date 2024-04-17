import React, { useEffect, useState } from "react";

function Index() {
  const [postTodo, setPostTodo] = useState([]);
  const [deleteTodo, setDeleteTodo] = useState([]);
  const [todos, setTodos] = useState([]);

  // console.log(todos);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    };
    return fetchData;
  }, []);

  const clickHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ postTodo, todos }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setTodos((todos) => [...todos, data]);
    setPostTodo([]);
  };

  const deleteHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ todos, deleteTodo }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setTodos(data);
    setDeleteTodo([]);
  };
  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li key={item.id}>
            {item.todos} | id : {item.id}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <input
          className=" mr-2 rounded-xl border-2 border-blue-700 px-2 py-1 focus:border-0 focus:border-blue-600 "
          value={postTodo}
          onChange={(e) => setPostTodo(e.target.value)}
        />
        <button
          className="rounded-xl bg-red-500 px-2 py-1 font-semibold text-white"
          onClick={clickHandler}
        >
          send request{" "}
        </button>
      </div>
      <div className="mt-5">
        <input
          type="number"
          className=" mr-2 rounded-xl border-2 border-blue-700 px-2 py-1 focus:border-0 focus:border-blue-600 "
          value={deleteTodo}
          onChange={(e) => setDeleteTodo(e.target.value)}
        />
        <button
          className="rounded-xl bg-red-500 px-2 py-1 font-semibold text-white"
          onClick={deleteHandler}
        >
          delete todo
        </button>
      </div>
    </div>
  );
}

export default Index;
