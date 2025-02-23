import { useParams, useLoaderData, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./routesCSS/project.css";

function Project() {
  const project = useLoaderData();

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
