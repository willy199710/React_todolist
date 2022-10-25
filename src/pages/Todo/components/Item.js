import { useState } from "react";
import { Modal, Button, CloseButton } from 'react-bootstrap';

const Item = ({ id, note, date, time }) => {



  return (
    <div className="list-item">
        <ul>
          <li><h5>{note}</h5></li>
          <li><h7>{`${date} ${time}`}</h7></li>
        </ul>
        <div className="list-button">
          <Button variant="success">修改</Button>
          <Button variant="danger">刪除</Button>
        </div>
    </div>
  );
};

export default Item;
