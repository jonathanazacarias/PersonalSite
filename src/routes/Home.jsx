import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import ContactForm from "../components/contactForm/ContactForm";

function Home() {
  return (
    <Container>
      <Hero />
        <hr />
        <p className="fs-2">Contact Me</p>
      <ContactForm />
    </Container>
  );
}

export default Home;