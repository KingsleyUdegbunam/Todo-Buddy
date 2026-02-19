import "./InputComponent.css";

export function InputComponent({ addToList, inputRef }) {
  return (
    <>
      <article className="input-section">
        <div className="todo-input-container">
          <input
            ref={inputRef}
            className="input-field"
            placeholder="What's on your list today?"
            onKeyDown={(e) => {
              e.key === "Enter" && addToList();
            }}
          />
        </div>
        <button className="add-btn" onClick={addToList}>
          Add <span className="optional-btn-text">Task</span>
        </button>
      </article>
    </>
  );
}
