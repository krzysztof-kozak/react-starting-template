import { useState } from "react";
import "./list.css";

const data = [
  { id: 0, label: "Item 0", checked: false, parent: "A" },
  { id: 1, label: "Item 1", checked: false, parent: "A" },
  { id: 2, label: "Item 2", checked: false, parent: "A" },
  { id: 3, label: "Item 3", checked: false, parent: "A" },
  { id: 4, label: "Item 4", checked: false, parent: "A" },
  { id: 5, label: "Item 5", checked: false, parent: "A" },
  { id: 6, label: "Item 6", checked: false, parent: "A" },
  { id: 7, label: "Item 7", checked: false, parent: "A" },
  { id: 8, label: "Item 8", checked: false, parent: "A" },
  { id: 9, label: "Item 9", checked: false, parent: "A" },
];

function List() {
  const [items, setItems] = useState(data);

  return (
    <div className="list">
      <ItemsContainer name="A" items={items} setItems={setItems} />

      <TransferButton direction="left" setItems={setItems} />
      <TransferButton direction="right" setItems={setItems} />

      <ItemsContainer name="B" items={items} setItems={setItems} />
    </div>
  );
}

function ItemsContainer({ name, items, setItems }) {
  function handleClick(id) {
    const nextItems = items.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return { ...item, checked: !item.checked };
    });

    setItems(nextItems);
  }

  const filteredItems = items.filter((item) => {
    return item.parent === name;
  });

  const mappedItems = filteredItems.map((item) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          id={item.id}
          checked={item.checked}
          onChange={() => handleClick(item.id)}
        />
        <label htmlFor={item.id}>{item.label}</label>
      </li>
    );
  });

  return (
    <div className="item-container">
      <div>
        <p>Lista: {name}</p>
        <ul>{mappedItems}</ul>
      </div>
    </div>
  );
}

function TransferButton({ direction, setItems }) {
  const text = direction === "right" ? ">" : "<";

  function handleClick() {
    setItems((prevItems) => {
      const nextItems = prevItems.map((item) => {
        if (!item.checked) {
          return item;
        }

        if (item.parent === "A" && direction === "left") {
          return item;
        }

        if (item.parent === "B" && direction === "right") {
          return item;
        }

        const nextParent = direction === "right" ? "B" : "A";
        return { ...item, parent: nextParent };
      });

      return nextItems;
    });
  }

  return (
    <button onClick={handleClick} className="transfer-button">
      {text}
    </button>
  );
}

export { List };
