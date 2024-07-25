import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sorted;

  if (sortBy === "input") sorted = items;
  if (sortBy === "desc")
    sorted = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sorted = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));

  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by an input order</option>
          <option value="desc">Sort by Description</option>
          <option value="packed">Sort by Packing Status</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
