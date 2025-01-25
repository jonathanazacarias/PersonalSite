import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import ResumeExperience from "./ResumeExperience";

function ResumeTabs(props) {
    const [experienceList, educationList, skillsList, honorsList, otherList] = props;
  return (
    <Tabs defaultActiveKey="experience" id="resume-tabs" className="mb-3">
      <Tab eventKey="experience" title="Experience">
        {experienceList.foreach(experience => {
            <ResumeExperience company={experience.company} date={experience.date} roleList={experience.roleList}/>
        })}
      </Tab>
      <Tab eventKey="education" title="Education & Training">
        Tab content for Profile
      </Tab>
      <Tab eventKey="skills" title="Skills">
        Tab content for Contact
      </Tab>
      <Tab eventKey="honors" title="Honors">
        Tab content for Contact
      </Tab>
      <Tab eventKey="other" title="Other">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default ResumeTabs;
