export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.isPacked}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.desc}
      </span>
      <button style={{ color: "white" }} onClick={() => onDeleteItem(item.id)}>
        ✕
      </button>
    </li>
  );
}
