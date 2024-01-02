import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Address() {
  return (
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Hoạt động với chọn"
        >
          <Form.Select aria-label="Floating label select example">
            
            <option value="1">Unknown</option>
            <option value="2">Sell</option>
            <option value="3">Question</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
}

export default Address;