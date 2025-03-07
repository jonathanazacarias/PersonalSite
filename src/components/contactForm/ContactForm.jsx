import { useState, useEffect, useRef } from "react";

import { useSubmit, useActionData } from "react-router-dom";

import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

import "./contactForm.css";
import CenteredModal from "../CenteredModal";

function ContactForm() {
  const submit = useSubmit();
  const data = useActionData();

  const recaptcha = useRef();

  const [validated, setValidated] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [modalMessage, setModalMessage] = useState("Here");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (data) {
      // set modal depending on if message successfully sent.
      if (data.status === "sent") {
        setModalMessage("Successfully sent your message!");
        setFName("");
        setLName("");
        setEmail("");
        setOrg("");
        setSubject("");
        setMessage("");
        setValidated(false);
        recaptcha.current.reset();
        setFormDisabled(false);
      } else {
        setModalMessage("Error sending your message, please try again later.");
      }

      // reset form - commented out because right now am disabling form after submit

      setModalShow(true);
    }
  }, [data]);

  function handleFormChange(e) {
    switch (e.target.id) {
      case "contactFormFName":
        setFName(e.target.value);
        break;
      case "contactFormLName":
        setLName(e.target.value);
        break;
      case "contactFormEmail":
        setEmail(e.target.value);
        break;
      case "contactFormOrg":
        setOrg(e.target.value);
        break;
      case "contactFormSubject":
        setSubject(e.target.value);
        break;
      case "contactFormMessage":
        setMessage(e.target.value);
        break;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const captchaValue = recaptcha.current.getValue();

    // check if user filled out all required fields
    if (form.checkValidity()) {
      // check if user completed the reCAPTCHA
      if (captchaValue) {
        // disable the form while attempting to send
        setFormDisabled(true);
        // show a spinner while sending

        const captchaJSON = { captchaToken: captchaValue };
        try {
          const captchaResponse = await axios.post(
            `https://api.jonathanzacarias.com/verify`,
            JSON.stringify(captchaJSON),
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );

          if (captchaResponse.data) {
            // captcha came back valid so send the form
            const formData = {
              fName: fName,
              lName: lName,
              email: email,
              org: org,
              subject: subject,
              message: message,
            };

            submit(JSON.stringify(formData), {
              method: "POST",
              encType: "application/json",
            });
          } else {
            // captcha was invalid
            setModalMessage("Invalid reCAPTCHA.");
            setModalShow(true);
          }
        } catch (error) {
          setModalMessage("ReCAPTCHA error. Please try again later.");
          setModalShow(true);
        }
      } else {
        setModalMessage("Please verify the reCAPTCHA");
        setModalShow(true);
        setFormDisabled(false);
      }
    }

    // highlight invalid fields
    setValidated(true);
    
  }

  function closeModal() {
    setModalShow(false);
  }

  return (
    <Container>
      <CenteredModal
        show={modalShow}
        message={modalMessage}
        handleClose={closeModal}
      />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId="contactFormFName">
            <Form.Label>First name*</Form.Label>
            <Form.Control
              type="input"
              value={fName}
              disabled={formDisabled}
              required
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="contactFormLName">
            <Form.Label>Last name*</Form.Label>
            <Form.Control
              type="input"
              value={lName}
              disabled={formDisabled}
              required
              onChange={handleFormChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="contactFormEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control
              type="email"
              value={email}
              disabled={formDisabled}
              required
              onChange={handleFormChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="contactFormOrg">
            <Form.Label>Company/ Org.</Form.Label>
            <Form.Control
              type="input"
              value={org}
              disabled={formDisabled}
              onChange={handleFormChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="contactFormSubject">
            <Form.Label>Subject*</Form.Label>
            <Form.Control
              type="input"
              value={subject}
              disabled={formDisabled}
              required
              onChange={handleFormChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="contactFormMessage">
            <Form.Label>Message*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              onChange={handleFormChange}
              value={message}
              disabled={formDisabled}
            />
          </Form.Group>
        </Row>
        <p className="requiredNote">* = required.</p>
        <ReCAPTCHA
          ref={recaptcha}
          sitekey="6Lc54ukqAAAAAFiyur7zGPlC8nRFmw87TpaYrpqy"
        />
        <Button
          className="contactFormBtn"
          type="submit"
          disabled={formDisabled}
        >
          {formDisabled? <><Spinner as="span" animation="border" size="sm" role="status"/> Sending...</>:"Submit"}
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
