import { useParams, useLoaderData, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../css/project.css";

import MarkdownRenderer from "../utils/MarkdownRenderer";

function Project(props) {
  const { projectId } = useParams();
  const project = useLoaderData();

  return (
    <Container className="projectPage">
      <Link to={"/Projects"}>
        <Button style={{'backgroundColor': 'grey', 'borderColor': 'grey', 'width': '100%'}}>Back to Projects</Button>
      </Link>
      <h1 className="centeredItem">{project.title}</h1>

      <MarkdownRenderer className="projectMarkdown" markdown={project.projectMarkdown}/>
      <Link to={"/Projects"}>
        <Button style={{'backgroundColor': 'grey', 'borderColor': 'grey', 'width': '100%'}}>Back to Projects</Button>
      </Link>
    </Container>
  );
}

export default Project;
