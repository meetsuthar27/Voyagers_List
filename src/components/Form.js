import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;

    const newItem = { desc, qty, isPacked: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDesc("");
    setQty(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
