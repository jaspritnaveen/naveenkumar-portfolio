import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import resume from "../../../Assets/Resume/Naveenkumarresume.pdf";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

export const ContactUs = () => {
  const formRef = useRef(null);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // validation
  const handleValidation = (event) => {
    const formEl = event.currentTarget;
    if (formEl.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return false; // invalid
    }
    setValidated(true);
    return true; // valid
  };

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wv06g7", // your service ID
        "template_yqbjlzp", // your template ID
        formRef.current,
        "D4ouhHYzn5Y-CAfNC" // your public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          formRef.current.reset();
          setValidated(false);
          // show the alert modal
          setShowAlert(true);
          // auto-hide after 5 seconds
          setTimeout(() => setShowAlert(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          // you could also show an error alert
        }
      );
  };

  return (
    <>
      <div className="contact-page p-3 bg-dark text-white">
        <div className="contact-welcome text-center">
          <h2>Let’s Connect</h2>
          <p>
            I’d love to hear from you! Whether you have a project idea, a
            question, or just want to say hi, feel free to drop me a message.
          </p>
        </div>

        <div className="container p-0 p-md-4">
          <div className="contact-parts p-0 p-md-4">
            <Container fluid>
              <Row>
                <Col className="contact-left-part pt-4 pt-md-0 ">
                  <h2>Open to Opportunities</h2>
                  <p>
                    If you’re looking for a dedicated developer for your team or
                    project, I’d be glad to explore how I can add value.
                  </p>

                  <div className="icons-part">
                    <li className="d-flex gap-4">
                      <div className="icon-box">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div className="icon-content">
                        <h5>Location</h5>
                        <p>Avinashi, Tamil Nadu 641655</p>
                      </div>
                    </li>

                    <li className="d-flex gap-4">
                      <div className="icon-box">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="icon-content">
                        <h5>Email</h5>
                        <p className="m-0 mb-2">jaspritnaveen@gmail.com</p>
                        <p>jaspritnaveen@gmail12.com</p>
                      </div>
                    </li>

                    <li className="d-flex gap-4">
                      <div className="icon-box">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="icon-content">
                        <h5>Phone</h5>
                        <p>6383146128</p>
                      </div>
                    </li>

                    <li className="d-flex gap-4">
                      <div className="icon-box">
                        <i className="bi bi-file-earmark-medical"></i>
                      </div>
                      <div className="icon-content resume-sec">
                        <h5>Resume</h5>
                        <a href={resume} className="gap-2">
                          <i className="bi bi-download"></i> Download CV
                        </a>
                      </div>
                    </li>

                    <div className="contact-icon-part ">
                      <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 pt-3">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/jaspritnaveen/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-linkedin fs-4"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://github.com/jaspritnaveen"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-github fs-4"></i>
                          </a>
                        </li>

                        <li>
                          <a href="mailto:jaspritnaveen@gmail.com">
                            <i className="bi bi-envelope-fill fs-4"></i>
                          </a>
                        </li>

                        <li>
                          <a href="tel:6383146128">
                            <i className="bi bi-telephone fs-4"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col className="contact-right-part ps-0 ps-md-5 ">
                  <Form
                    noValidate
                    validated={validated}
                    ref={formRef}
                    onSubmit={(e) => {
                      // first run validation, only send if valid
                      if (handleValidation(e)) {
                        sendEmail(e);
                      }
                    }}
                    className="contact-form-wrapper"
                  >
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                        className="mb-3"
                      >
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Your name"
                          name="from_name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Your Email"
                          name="from_email"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustomUsername"
                        className="mb-3"
                      >
                        <Form.Label>Subject</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Subject"
                            aria-describedby="inputGroupPrepend"
                            name="from_subject"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a subject.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                        className="mb-3"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Write your message"
                          required
                          name="message"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please write a message.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" className="w-100">
                      Submit form
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
      <Modal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for contacting me. We will get back to you soon.
        </Modal.Body>
      </Modal>
    </>
  );
};
