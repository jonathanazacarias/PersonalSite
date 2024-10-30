import NavBar from "./components/navBar/NavBar";
import Hero from "./components/Hero";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <Hero></Hero>
      <Container>
        <hr />
        <p className="fs-2">Contact Me</p>
      </Container>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
