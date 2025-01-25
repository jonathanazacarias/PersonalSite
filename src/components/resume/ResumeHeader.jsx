import { Container } from "react-bootstrap";
import "./resume.css";
import ResumeHeaderCard from "./ResumeHeaderCard";

function ResumeHeader(props) {
  const summary = props.summary;
  return (
    <div id="header">
      <ResumeHeaderCard />
      <Container className="titleSection">
        <h1>Resume</h1>
        <h3 id="titleSectionChild">Summary</h3>
        <p>
          {summary}
        </p>
      </Container>
    </div>
  );
}

export default ResumeHeader;
