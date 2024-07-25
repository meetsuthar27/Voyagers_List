export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Let's start packing!</em>
      </p>
    );

  const newItem = items.length;
  const newPacked = items.filter((item) => item.isPacked).length;
  const percent = Math.round((newPacked / newItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything, Ready to go..."
          : `You have ${newItem} items on your list and you already packed ${newPacked}
          (${percent} %) of them! 🤩`}
      </em>
    </footer>
  );
}
