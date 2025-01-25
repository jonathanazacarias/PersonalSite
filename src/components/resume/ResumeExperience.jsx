import ExperiencePoints from "./ExperiencePoint";

function ResumeExperience(props) {

    const [company, date, roleList] = props;
    
  return (
    <div className="exp">
      <div className="expHeader">
        <h4 className="expCompany">{company}</h4>
        <p className="expDate">{date}</p>
      </div>
      {roleList.forEach(role => {
        <ExperiencePoints role={role.role} date={role.date} pointList={role.pointList}/>
      })}
    </div>
  );
}

export default ResumeExperience;
