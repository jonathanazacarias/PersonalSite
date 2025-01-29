import { Container } from "react-bootstrap";
import "./resume.css";
import HeaderCard from "../HeaderCard";

function ResumeHeader(props) {
  const summary = props.summary;
  const cardData = props.headerCard;
  return (
    <div id="header">
      <HeaderCard
        profilePicture={cardData.profilePic}
        title={cardData.title}
        downloadLink={cardData.downloadlink}
        downloadBtnText={cardData.downloadBtnText}
      />
      <Container className="titleSection">
        <h1>Resume</h1>
        <h3 id="titleSectionChild">Summary</h3>
        <p>{summary}</p>
      </Container>
    </div>
  );
}

export default ResumeHeader;
