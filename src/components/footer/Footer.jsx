import { Container, Row } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <footer className="text-center footer">
      <Container >
        <Row>
          Copyright @ 2024 Jonathan Zacarias. Built with React.
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
