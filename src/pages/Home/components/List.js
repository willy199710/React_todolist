import Item from "./Item";

const List = ({ listData, deleteData}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return <Item id={id} note={note} date={date} time={time} deleteData={deleteData} />;
      })}
    </div>
  );
};
export default List;
