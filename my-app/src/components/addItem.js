function AddItem({ formData, onFormChange, onAddItem }) {
  return (
    <div className="row">
      <div className="col" controlId="service">
        <div>Услуга</div>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={onFormChange}
          required
        />
      </div>

      <div className="col" controlId="price">
        <div>Стоимость</div>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={onFormChange}
          required
        />
      </div>

      <div className="col" style={{ marginTop: "25px" }}>
        <button onClick={(evt) => onAddItem(evt)}>Сохранить</button>
      </div>
    </div>
  );
}

export default AddItem;
