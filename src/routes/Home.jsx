import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import ContactForm from "../components/contactForm/ContactForm";

function Home() {
  return (
    <Container>
      <Hero />
      <hr />
      <h2>This Website</h2>
      <p>
        This website is hosted on my very own web servers! There are still areas under construction as
        I convert my static html website to a React one! Check out what I've got
        so far and enjoy the quirks while I finish up development!
      </p>
      <hr />
      <p className="fs-2">Contact Me</p>
      <ContactForm />
    </Container>
  );
}

export default Home;
