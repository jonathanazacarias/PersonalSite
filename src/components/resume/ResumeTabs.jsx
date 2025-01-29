import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import ResumeExperience from "./ResumeExperience";
import { v4 as uuidv4 } from "uuid";
import Education from "./Education";
import Skill from "./Skill";
import Other from "./Other";

function ResumeTabs(props) {
  const { experienceList, educationList, skillsList, honorsList, otherList } =
    props;

  return (
    <Tabs defaultActiveKey="experience" id="resume-tabs" className="mb-3">
      <Tab eventKey="experience" title="Experience">
        {experienceList?.map((experience) => (
          <div key={uuidv4()}>
            <ResumeExperience
              company={experience.company}
              date={experience.date}
              roleList={experience.roleList}
            />
            <hr />
          </div>
        ))}
      </Tab>
      <Tab eventKey="education" title="Education & Training">
        {educationList?.map((edu) => (
          <div key={uuidv4()}>
            <Education
              institution={edu.institution}
              location={edu.location}
              date={edu.date}
              summary={edu.summary}
            />
            <hr />
          </div>
        ))}
      </Tab>
      <Tab eventKey="skills" title="Skills">
        {skillsList?.map((skill) => (
          <div key={uuidv4()}>
            <Skill
              skill={skill.skill}
              skillExampleList={skill.skillExampleList}
            />
            <hr />
          </div>
        ))}
      </Tab>
      <Tab eventKey="honors" title="Honors">
        {honorsList?.map((honor) => (
          <div key={uuidv4()}>
            <p>{honor}</p>
            <hr />
          </div>
        ))}
      </Tab>
      <Tab eventKey="other" title="Other">
        {
          otherList?.map((other) => (
            <div key={uuidv4()}>
              <Other title={other.title} list={other.list}/>
            </div>
          ))}
      </Tab>
    </Tabs>
  );
}

export default ResumeTabs;
