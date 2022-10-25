import Item from "./Item";

const List = ({ listData }) => {

  if (listData === undefined || listData === null) return;
  else {
    return (
      <div className="list">
        {listData.map((item) => {
          const { id, note, date, time } = item;
          return <Item id={id} note={note} date={date} time={time} listData={listData}/>;
        })}
      </div>
    );
  }
};
export default List;
