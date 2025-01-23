import { Container } from "react-bootstrap";
import "./resume.css";
import ResumeHeaderCard from "./ResumeHeaderCard";

function ResumeHeader() {
  return (
    <div id="header">
      <ResumeHeaderCard />
      <Container className="titleSection">
        <h1>Resume</h1>
        <h3 id="titleSectionChild">Summary</h3>
        <p>
          A passionate, dependable, and disciplined individual with full stack
          software engineering knowledge, and operations management experience.
          Has a Bachelor's degree in Computer Science, practical leadership
          experience, and a lifelong learner and growth mindset.
        </p>
      </Container>
    </div>
  );
}

export default ResumeHeader;
