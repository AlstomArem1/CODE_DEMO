import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingTextareaExample() {
  return (
    <>
      <FloatingLabel

        className="mb-3"
      >

      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Hỏi và Đáp">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}

        />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingTextareaExample;
