import {v4 as uuidv4} from "uuid";
function ExperienceRole(props) {
  
  const {roleTitle, location, date, expPointList} = props;

  return (
    <div>
      <div className="roleHeader">
        <h5 className="roleTitle">{roleTitle}</h5>
        <h5 className="roleLocation">{location}</h5>
        <div className="expDate">{date}</div>
      </div>

      <ul className="expPointList">
        {expPointList?.map((point) => (
            <li key={uuidv4()} className="expPoint">{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceRole;
