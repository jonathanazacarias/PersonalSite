function ExperiencePoints(props) {
  const [role, date, pointList] = props;

  return (
    <div>
      <div className="roleHeader">
        <h5 className="roleTitle">{role}</h5>
        <div className="expDate">{date}</div>
      </div>

      <ul className="expPointList">
        {pointList.forEach(point => {
            <li className="expPoint">{point}</li>
        })}
      </ul>
    </div>
  );
}

export default ExperiencePoints;
