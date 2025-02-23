import { Container } from "react-bootstrap";
import "./resume.css";
import ProfileCard from "../ProfileCard";

function ResumeHeader(props) {
  const summary = props.summary;
  const cardData = props.headerCard;

  function handleBtnClick() {
    // let link = cardData.downloadlink;
    console.log("Button clicked");
  }

  return (
    <div id="header">
      <ProfileCard
        profilePicture={cardData.profilePic}
        title={cardData.title}
        handleBtnClick={handleBtnClick}
        buttonText={cardData.downloadBtnText}
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
