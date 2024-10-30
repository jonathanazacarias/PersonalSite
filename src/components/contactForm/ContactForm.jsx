import { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./contactForm.css";

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId="contactFormFName">
            <Form.Label>First name*</Form.Label>
            <Form.Control type="input" required />
          </Form.Group>
          <Form.Group as={Col} controlId="contactFormLName">
            <Form.Label>Last name*</Form.Label>
            <Form.Control type="input" required />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={8} controlId="contactFormEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group as={Col} controlId="contactFormOrg">
            <Form.Label>Company/ Org.</Form.Label>
            <Form.Control type="input" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="contactFormSubject">
            <Form.Label>Subject*</Form.Label>
            <Form.Control type="input" required />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="contactFormMessage">
            <Form.Label>Message*</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
        </Row>
        <p className="disclaimer">* = required.</p>
        <Button className="contactFormBtn" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
