# React 實作 To-do list

## To-do list首頁

![GITHUB](https://raw.githubusercontent.com/willy199710/React_todolist/main/picture/To-do-list.PNG)

## 新增內容

![GITHUB](https://github.com/willy199710/React_todolist/blob/main/picture/add_item.PNG)

使用 React.Modal 做彈出式視窗，並以useState hook 控制 Modal 的顯示開關

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