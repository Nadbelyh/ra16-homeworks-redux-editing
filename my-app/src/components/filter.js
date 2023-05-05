function Filter({ onFilter, filterText }) {
  return (
    <div
      className="row"
      onSubmit={(evt) => evt.preventDefault()}
      style={{ marginLeft: "10px" }}
    >
      <div>
        <div>Фильтр</div>
        <input
          type="text"
          name="search"
          value={filterText}
          onChange={onFilter}
        />
      </div>
    </div>
  );
}

export default Filter;
