import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 } from "uuid";

const AddForm = ({onHide, addData}) => {
    
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function resetInput () {
        setNote("");
        setDate("");
        setTime("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onHide(); //從index.js帶入之關閉modal方法

        const data = {
            "id": v4(),
            "note": note,
            "date": date,
            "time": time
        }

        addData(data); //加入List的資料集


        resetInput(); //清空Input內容
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>內容</Form.Label>
                <Form.Control value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="輸入欲記事之內容(必填)" required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>日期</Form.Label>
                <Form.Control value={date} onChange={(e) => setDate(e.target.value)} type="date"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>時間</Form.Label>
                <Form.Control value={time} onChange={(e) => setTime(e.target.value)} type="time"></Form.Control>
            </Form.Group>
                <Button className="float-end" variant="primary" type="submit">新建</Button>
        </Form>
    )
}

export default AddForm;