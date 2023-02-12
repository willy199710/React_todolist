import { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import AddForm from './components/AddForm';
import List from './components/List';
import './index.css';


const Todo = () => {

    const fakeItemData = require('./data/fakeItemData.json');

    const [listData, setListData] = useState(fakeItemData.fakeList);
    const [show, setShow] = useState(false);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
        <div className='todoList'>
            <div className='item'><h2>記事本</h2></div>
            <div className='item'><Button onClick={handleShow} variant="success">新增新內容</Button></div>
        </div>
        <div>
            <List listData={listData} changeData={setListData}/>
        </div>


        
        <Modal show = {show}>
            <Modal.Header>
                <Modal.Title>
                    新增記事內容
                </Modal.Title>
                <CloseButton onClick={handleClose}>
                </CloseButton>
            </Modal.Header>
            <Modal.Body>
                <AddForm onHide={()=> setShow(false)} addData={(newData) => setListData(arr => [...arr, newData])}/>
            </Modal.Body>
        </Modal>
    </>
    )
}

export default Todo