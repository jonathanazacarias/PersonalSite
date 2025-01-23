import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { Container } from "react-bootstrap";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeBody from "../components/resume/ResumeBody";

function Resume() {
  return (
    <div>
      <NavBar />
      <Container>
        <ResumeHeader/>
        <ResumeBody/>
      </Container>
      <Footer />
    </div>
  );
}

export default Resume;
