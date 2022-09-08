const Item = ({ id, note, date, time, deleteData }) => {
  function editFromList() {

  }

  function removeFromList() {
    deleteData(function(prev) {
        return prev.filter(item => item.id != id)
    })
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <div>
        <button className="editList" onClick={editFromList}>修改</button>
        <button className="removeList" onClick={removeFromList}>刪除</button>
      </div>
    </div>
  );
};

export default Item;
