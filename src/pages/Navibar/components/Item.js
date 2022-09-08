const Item = ({note, date, time}) => {

    function editFromList() {

    }

    function removeFromList(){
        
    }

    return (
        <div className="item">
            <div>
                <p>{`${note} ${date} ${time}`}</p>
            </div>
            <div>
            <button className="editList" onClick={editFromList}>修改</button>
            <button className="removeList" onClick={removeFromList}>刪除</button>
            </div>
        </div>
    )
}

export default Item;