import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

function ResumeTabs() {
  return (
    <Tabs defaultActiveKey="experience" id="resume-tabs" className="mb-3">
      <Tab eventKey="experience" title="Experience">
        <div className="exp">
          <div className="expHeader">
            <h4 className="expTitle">Ally Waste</h4>
            <p className="expDate">Jan 2019 - June 2023</p>
          </div>
          <div className="roleHeader">
            <h5>District Manager & Tech. Developer</h5>
            <div className="expDate">June 2021 - June 2023</div>
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
              Took over 3 challenged accounts in other markets resulting in
              contract renewals for all. Equipment maintenance and repair
              resulting in $21,000 cost saved over 1 year.
            </li>
          </ul>
        </div>
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
