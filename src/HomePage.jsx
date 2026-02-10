import "./reset.css";
import "./HomePage.css";
import { useRef, useState, useEffect } from "react";
import { InputComponent } from "./InputComponent";
import { TodoComponent } from "./TodoComponent";

export function HomePage() {
  const [todoListData, setTodoListData] = useState([]);
  const inputRef = useRef("");

  const sortedTodoData = [
    ...todoListData.filter((t) => !t.completed),
    ...todoListData.filter((t) => t.completed),
  ];

  useEffect(() => {
    console.log(todoListData);
  }, [todoListData]);

  function addToList() {
    const value = inputRef.current.value.trim();

    if (!value) return;
    console.log("yes");

    setTodoListData((prev) => [
      ...prev,
      { value, key: crypto.randomUUID(), completed: false },
    ]);

    inputRef.current.value = "";
  }

  return (
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
    </section>
  );
}
