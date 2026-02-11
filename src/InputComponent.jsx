import "./InputComponent.css";

export function InputComponent({ addToList, inputRef }) {
  return (
    <>
      <article className="input-section">
        <input
          ref={inputRef}
          className="input-field"
          placeholder="What's on your list today?"
          onKeyDown={(e) => {
            e.key === "Enter" && addToList();
          }}
        />
        <button className="add-btn" onClick={addToList}>
          Add Task
        </button>
      </article>
    </>
  );
}
