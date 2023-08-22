import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function App() {
  return (
    <div className="App">
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

<div>
  <header>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.
     Some quick example text to build on the card title and make up the
    bulk of the card's content.
    </p>
  </header>

</div>






<div id='card3'> 
      <Card style={{ width: '18rem' }}>
<Card.Body   className='card'>
  <Card.Title>Card Title</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>




<Card style={{ width: '18rem' }}>
<Card.Body className='card'>
  <Card.Title>Card Title</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>




<Card style={{ width: '18rem' }}>
<Card.Body className='card'>
  <Card.Title>Card Title</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>


</div>


<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
    

  );
}

export default App;
