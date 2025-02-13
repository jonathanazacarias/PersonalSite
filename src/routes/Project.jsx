import { useParams, useLoaderData, Link } from "react-router-dom";
import imgURLLoader from "../utils/img-loader";
import { Button, Container } from "react-bootstrap";
import "../css/project.css";
import Markdown from "react-markdown";



function Project(props) {
  const { projectId } = useParams();
  const project = useLoaderData();

  let markdown = "![img](beach.JPG)";

  return (
    <Container className="projectPage">
      
      <h1>{project.title}</h1>

      <Link to={"/Projects"}>
        <Button>Back</Button>
      </Link>
      
    </Container>
  );
}

export default Project;
