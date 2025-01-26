import ResumeTabs from "./ResumeTabs";

function ResumeBody(props) {
  const resumeBody = props.resumeBody;

  return (
    <div>
      <ResumeTabs
        experienceList={resumeBody.experience}
        educationList={resumeBody.education}
        skillsList={resumeBody.skills}
        honorsList={resumeBody.honors}
        otherList={resumeBody.other}
      />
    </div>
  );
}

export default ResumeBody;
