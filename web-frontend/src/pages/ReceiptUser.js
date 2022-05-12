import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import axios from 'axios';
const ReceiptUser = () => {
  const [userId, setUserId] = useState("");
  const [receipts, setReceipts] = useState([]);
  const handleInput = async (e) => {
    e.preventDefault();
    await axios.get(`http://localhost:4000/api/v1/receipt/user/${userId}`)
      .then(res => {
        console.log(res.data);
        setReceipts(res.data);
      });
  }
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Id</Form.Label>
          <Form.Control type="text" placeholder="Enter user id" onChange={e => setUserId(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleInput(e)}>
          Find User
        </Button>
      </Form>
      {receipts.map(receipt => {
        return (
          <Card key={receipt._id} style={{ height: "250px", width: "300px", margin: "5%" }}>
            <Card.Img variant="top" height={"100px"} src={receipt.url} />
            <Card.Body>
              <Card.Title>{receipt.date}</Card.Title>
              <Button>More Info</Button>
            </Card.Body>
          </Card>
        )
      })}
    </Container>
  )
}

export default ReceiptUser