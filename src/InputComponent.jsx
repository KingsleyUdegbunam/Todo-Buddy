import "./InputComponent.css";

export function InputComponent({ addToList, inputRef }) {
  return (
    <>
      <article className="input-section">
        <input
          ref={inputRef}
          className="input-field"
          placeholder="Get typing buddy!"
          onKeyDown={(e) => {
            e.key === "Enter" && addToList();
          }}
        />
        <button className="add-btn" onClick={addToList}>
          ADD
        </button>
      </article>
    </>
  );
}
