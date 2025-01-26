import ExperienceRole from "./ExperienceRole";
import { v4 as uuidv4 } from "uuid";

function ResumeExperience(props) {
  const { company, date, roleList } = props;

  return (
    <div className="exp">
      <div className="expHeader">
        <h4 className="expCompany">{company}</h4>
        <p className="expDate">{date}</p>
      </div>
      {roleList.map((role) => (
        <ExperienceRole
          key={uuidv4()}
          roleTitle={role.roleTitle}
          location={role.location}
          date={role.date}
          expPointList={role.expPointList}
        />
      ))}
    </div>
  );
}

export default ResumeExperience;
