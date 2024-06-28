import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <section fluid className="message_container">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={8}>
              <h4>Contact Us</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas aliquid, voluptatem nemo simiptatem nemo similique ut
                reprehen lique ut repreh reprehen enderit!
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="First Name"
                        required
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-4"
                        placeholder="Email"
                        required
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Location"
                        required
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <InputGroup>
                      <input
                        type="tel"
                        className="form-control mb-4"
                        placeholder="Phone No"
                        required
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <InputGroup>
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="form-control pb-5 pt-2"
                  ></textarea>
                </InputGroup>

                <Button
                  type="submit"
                  className="form-control submit_button mb-4"
                >
                  Send your message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;