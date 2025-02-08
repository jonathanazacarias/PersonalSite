import { Container } from "react-bootstrap";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeBody from "../components/resume/ResumeBody";
import { useLoaderData } from "react-router-dom";

function Resume() {
  const resume = useLoaderData();

  const summary = resume.summary;
  const headerCard = resume.headerCard;
  const resumeBody = resume.resumeBody;

  return (
    <Container>
      <ResumeHeader summary={summary} headerCard={headerCard} />

      {/* reumeBody is a bit redundant.. could just add the reumeTabs component
        here (resumeBody just adds a div around the tabs) but the 'resumeBody'
        makes logical sense around the tabs so will keep for now as you could
        forseeably add contentseperate from the tabs to the resume body*/}
      <ResumeBody resumeBody={resumeBody} />
    </Container>
  );
}

export default Resume;
