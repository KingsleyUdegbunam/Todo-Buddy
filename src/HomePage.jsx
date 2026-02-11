import "./reset.css";
import "./HomePage.css";
import { useRef, useState, useEffect } from "react";
import { InputComponent } from "./InputComponent";
import { TodoComponent } from "./TodoComponent";

export function HomePage() {
  const [todoListData, setTodoListData] = useState(() => {
    try {
      const storedTodos = localStorage.getItem("todoList");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch {
      return [];
    }
  });
  const inputRef = useRef("");

  const sortedTodoData = [
    ...todoListData.filter((t) => !t.completed),
    ...todoListData.filter((t) => t.completed),
  ];

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoListData));
  }, [todoListData]);

  function addToList() {
    const value = inputRef.current.value.trim();

    if (!value) return;

    setTodoListData((prev) => [
      ...prev,
      { value, key: crypto.randomUUID(), completed: false },
    ]);

    inputRef.current.value = "";
  }

  return (
    <>
      <section className="main-container">
        <p className="header-text">TODO BUDDY</p>
        <div className="main-container-wrapper">
          <InputComponent addToList={addToList} inputRef={inputRef} />

          <div className="todo-list-container">
            {sortedTodoData.map((todo) => {
              return (
                <TodoComponent
                  key={todo.key}
                  setTodoListData={setTodoListData}
                  todo={todo}
                />
              );
            })}
          </div>
        </div>

        <footer className="footnote">
          Built by
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/kingsley-udegbunam/"
          >
            Kay.
          </a>
        </footer>
      </section>
    </>
  );
}
