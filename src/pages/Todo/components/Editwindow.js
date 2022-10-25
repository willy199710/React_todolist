import { useState } from "react";

const EditWindow = ({prevNote, prevDate, prevTime}) => {

    const [note, setNote] = useState(prevNote);
    const [date, setDate] = useState(prevDate);
    const [time, setTime] = useState(prevTime);


    function editList(e){
        setNote(e.target.value)
        setDate(e.target.value)
        setTime(e.target.value)
    }

    return <div className="editWindow">
        <h1>更改內容</h1>
        <p>記事：</p>
        <input type = "text" value={note}/>
        <p>日期：</p>
        <input type = "date" value={date}/>
        <p>時間：</p>
        <input type = "time" value={time}/>
        <button className="edit" onClick={editList}>更改</button>
    </div>
}

export default Editwindow;