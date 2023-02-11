import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditForm = ({onHide, content, editData}) => {
    
    const [note, setNote] = useState(content.note);
    const [date, setDate] = useState(content.date);
    const [time, setTime] = useState(content.time);

    const handleSubmit = (e) => {
        e.preventDefault();
        onHide(); //關閉modal方法

        editData(function(prev){
            return prev.map((item) => {
                if (item.id === content.id) {
                    item.note = note;
                    item.date = date;
                    item.time = time;
                }
            })
        }
    )}


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>內容</Form.Label>
                <Form.Control value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="輸入欲修改之內容(必填)" required></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>日期</Form.Label>
                <Form.Control value={date} onChange={(e) => setDate(e.target.value)} type="date"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>時間</Form.Label>
                <Form.Control value={time} onChange={(e) => setTime(e.target.value)} type="time"></Form.Control>
            </Form.Group>
                <Button className="float-end" variant="primary" type="submit">更改</Button>
        </Form>
    )
}

export default EditForm;