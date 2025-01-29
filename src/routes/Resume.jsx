import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import { Container } from "react-bootstrap";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeBody from "../components/resume/ResumeBody";

function Resume(props) {
  
  const summary = props.summary;
  const headerCard = props.headerCard;
  const resumeBody = props.resumeBody;

  return (
    <div>
      <NavBar />
      <Container>
        <ResumeHeader summary={summary} headerCard={headerCard}/>
        
        {/* reumeBody is a bit redundant.. could just add the reumeTabs component
        here (resumeBody just adds a div around the tabs) but the 'resumeBody'
        makes logical sense around the tabs so will keep for now as you could
        forseeably add contentseperate from the tabs to the resume body*/}
        <ResumeBody resumeBody={resumeBody} />
      </Container>
      <Footer />
    </div>
  );
}

export default Resume;
