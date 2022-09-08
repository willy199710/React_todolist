import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({add}) => {
    
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function noteChange(e){
        setNote(e.target.value)
    }

    function dateChange(e){
        setDate(e.target.value)
    }

    function timeChange(e){
        setTime(e.target.value)
    }

    function addToList() {
        add(function(prev) {
            return [
                {
                    id: v4(),
                    note,
                    date,
                    time,
                },
                ...prev,
            ];
        });
    }


    return <div className="edit">
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type = "text" value={note} onChange={noteChange}/>
        <p>日期：</p>
        <input type = "date" value={date} onChange={dateChange}/>
        <p>時間：</p>
        <input type = "time" value={time} onChange={timeChange}/>
        <button className="add" onClick={addToList}>新增</button>
    </div>
}

export default Edit;