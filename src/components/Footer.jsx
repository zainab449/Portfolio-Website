import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/img/logo.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={4} className="text-start">
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={4} className="text-center">
            <p>Copyright @2024. All Rights Reserved</p>
          </Col>
          <Col xs={12} sm={4} className="text-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
