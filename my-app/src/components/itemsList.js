import Item from "./item";

function ItemsList({ items, onEditClick, onRemoveClick }) {
  return (
    <div>
      {items.map((item) => (
        <Item
          item={item}
          onEdit={onEditClick}
          onRemove={onRemoveClick}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default ItemsList;
