import ResumeTabs from "./ResumeTabs";

function ResumeBody(props) {
  const resumeBody = props.resumeBody;
  return (
    <div>
      <ResumeTabs
        experienceList={resumeBody.experience}
        educationList={resumeBody.experienceList}
        skillsList={resumeBody.skillsList}
        honorsList={resumeBody.honorsList}
        otherList={resumeBody.otherList}
      />
    </div>
  );
}

export default ResumeBody;
