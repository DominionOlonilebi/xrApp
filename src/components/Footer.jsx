import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  FaAddressBook,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <section fluid className="footer_container">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={4} className="mb-4">
              <h5 className="text-warning">KWAMRA</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Reiciendis, harum. Harum nesciunt obcaecati
              </p>
              
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              
              <FaFacebook className="social-media mx-2" />
              <FaInstagram className="social-medias mx-2" />
              <FaTwitter className="social-media mx-2" />
              <FaYoutube className="social-media mx-2 " />
            </Col>

            <Col md={3} className="mb-3">
              <h5 className="mb-4">Get in touch</h5>
              <p>
                <FaPhone /> &nbsp; +2348012345678
              </p>
              <p>
                <FaEnvelope /> &nbsp; Laculuctusn@gmail.com
              </p>
              <p>
                <FaAddressBook /> &nbsp; Lacus luctus accumsan sit amet
                <br />
                consectetur sit amet consectetur
              </p>
            </Col>
            <Col md={4}>
              <h5 className="mb-4">Remember Me</h5>
              <Form>
                <InputGroup>
                  <input
                    type="text"
                    className="form-control mb-1"
                    placeholder="..."
                    required
                  />
                </InputGroup>

                <Button
                  type="submit"
                  className="form-control submit_button mb-3"
                >
                  Send your message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <hr />

        <h6 className="text" style={{ textAlign: "center" }}>
          &copy; CopyRight 2024. All Rights Reserved
        </h6>
      </section>
    </div>
  );
};

export default Footer;