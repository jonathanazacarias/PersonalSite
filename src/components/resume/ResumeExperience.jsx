function ResumeExperience(props) {

    const [company, companyDate, roleList] = props;
    
  return (
    <div className="exp">
      <div className="expHeader">
        <h4 className="expCompany">{company}</h4>
        <p className="expDate">{companyDate}</p>
      </div>
      <div className="roleHeader">
        <h5 className="roleTitle">{roleTitle}</h5>
        <div className="expDate">{roleDate}</div>
      </div>

      <ul className="expPoints">
        <li>
          Managed 15 west coast accounts, ~35 direct reports. Increased
          associate retention by 22% and reduced operational spending in the
          district by ~ 33%.
        </li>
        <li>
          App ideation and testing (user requirements analysis and user
          experience for “Ally” app), website building and SEO (
          <Link to="https://www.allywaste.com" target="_blank">
            allywaste.com
          </Link>
          ), and Salesforce Admin - Increased client retention by 4% over 1
          year.
        </li>
        <li>
          Took over 3 challenged accounts in other markets resulting in contract
          renewals for all. Equipment maintenance and repair resulting in
          $21,000 cost saved over 1 year.
        </li>
      </ul>
    </div>
  );
}

export default ResumeExperience;
