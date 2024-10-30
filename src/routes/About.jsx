import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <NavBar />
      <Container>
        <h1>About Me</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
