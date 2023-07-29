function ListGroup() {
  //add an array for the list

  const items = ["London", "New York", "Paris", "Tokyo"];
  return (
    <>
      <h1>This is a list</h1>
      <ul className="list-group">
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
