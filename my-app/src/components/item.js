import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";
function Item({ item, onEdit, onRemove }) {
  const { id, service, price } = item;
  return (
    <div className="row">
      <div className="col service">{service}</div>
      <div className="col price">{price}</div>
      <div className="col svgButton " style={{ paddingBottom: "0px" }}>
        <Edit onClick={() => onEdit(id)} title=" Редактировать" />
      </div>
      <div className="col svgButton " style={{ paddingBottom: "0px" }}>
        <Delete onClick={() => onRemove(id)} title="Удалить" />
      </div>
    </div>
  );
}

export default Item;
