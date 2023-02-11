# React 實作 To-do list

## To-do list首頁

![GITHUB](https://github.com/willy199710/React_todolist/blob/main/picture/to-do_List.JPG)

## 新增內容

![GITHUB](https://github.com/willy199710/React_todolist/blob/main/picture/add_Item.gif)

使用 React.Modal 做彈出式視窗，並以 useState 控制 Modal 的顯示開關

```js
//index.js

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
```
```js
//addForm.js

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
```

## 刪除內容

![GITHUB](https://github.com/willy199710/React_todolist/blob/main/picture/delete_Item.gif)


將 setListData 改變 state 狀態的功能從 index.js -> List.js -> Item.js 供使用

```js
// ./src/index.js

<List listData={listData} changeData={setListData}/>

```

```js
// List.js
return <Item id={id} note={note} date={date} time={time} changeData={changeData}/>;

```
用 deleteItem() 將 Item 取出，再更新 state 重新渲染一次，顯示刪除過後的資料

```js
// Item.js

  //用 filter 方式將要刪除的 Item 從 listData 中取出
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
    )
```