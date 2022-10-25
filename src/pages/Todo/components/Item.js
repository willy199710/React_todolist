import { useState } from "react";
import { Modal, Button, CloseButton } from 'react-bootstrap';
import EditForm from "./EditForm";


const Item = ({ id, note, date, time, listData }) => {

  const content = {
    "id": id,
    "note": note,
    "date": date,
    "time": time
  };

  const [editShow, setEditShow] = useState(false);


  return (
    <>
    <div className="list-item">
        <ul>
          <li><h5>{note}</h5></li>
          <li><h7>{`${date} ${time}`}</h7></li>
        </ul>
        <div className="list-button">
          <Button variant="success" onClick={() => setEditShow(true)}>修改</Button>
          <Button variant="danger">刪除</Button>
        </div>
    </div>


    <Modal show = {editShow}>
            <Modal.Header>
                <Modal.Title>
                    修改記事內容
                </Modal.Title>
                <CloseButton onClick={() => setEditShow(false)}>
                </CloseButton>
            </Modal.Header>
            <Modal.Body>
                <EditForm onHide={()=> setEditShow(false)} content = {content} listData = {listData}/>
            </Modal.Body>
        </Modal>
    </>
  );
};

export default Item;
