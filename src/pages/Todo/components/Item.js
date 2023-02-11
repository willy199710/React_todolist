import { useState } from 'react';
import { Modal, Button, CloseButton, Collapse } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditForm from './EditForm';

const Item = ({ id, note, date, time, changeData }) => {

  const content = {
    "id": id,
    "note": note,
    "date": date,
    "time": time
  };

  const [editShow, setEditShow] = useState(false);

  function deleteItem() {
    changeData(function(prev){
      return prev.filter(item => item.id !== id)
    })
  };


  return (
    <>
    <Container fluid>
        <Row className="itemRow">
          <Col>
            <h5>{note}</h5>
            <h7>{`${date} ${time}`}</h7>
          </Col>
          <Col className="p-2">
            <Button size="lg" variant="danger" onClick={deleteItem}><BsFillTrashFill /></Button>
            <Button size="lg" variant="success" onClick={() => setEditShow(true)}><FaClipboardList /></Button>
          </Col>
        </Row>
    </Container>


    <Modal show = {editShow}>
            <Modal.Header>
                <Modal.Title>
                    修改記事內容
                </Modal.Title>
                <CloseButton onClick={() => setEditShow(false)}>
                </CloseButton>
            </Modal.Header>
            <Modal.Body>
                <EditForm onHide={()=> setEditShow(false)} content = {content} editData = {changeData}></EditForm>
            </Modal.Body>
        </Modal>
    </>
  );
};

export default Item;
