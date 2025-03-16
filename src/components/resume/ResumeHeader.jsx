import { Container } from "react-bootstrap";
import "./resume.css";
import ProfileCard from "../ProfileCard";
import axios from "axios";

function ResumeHeader(props) {
  const summary = props.summary;
  const cardData = props.headerCard;

  async function handleBtnClick() {
    try {
      let response = await axios.post(`https://api.jonathanzacarias.com/download`,
        JSON.stringify({resource: "resume"}),
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
              responseType: 'blob',
            }
          );
      const pdfBlob = new Blob([response.data], {type:"application/pdf"});
      const url = window.URL.createObjectURL(pdfBlob);
      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.setAttribute("download", "Jonathan_Zacarias_Resume.pdf");
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
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
