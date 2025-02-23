import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectGrid(props) {
  const projects = props.projectList;
  console.log(projects)

  const csProjectList = projects.filter(project => project.type == 0);
  const otherProjectList = projects.filter(project => project.type == 1);

  return (
    <Container id="projectsPage">
      <h1>Projects</h1>
      <h2 className="projectSectionTitle">Coding projects:</h2>
      <Container className="projectsContainer">
        {csProjectList?.map((project) => (
          <ProjectCard
            key={project.id}
            projectId={project.id}
            title={project.title}
            description={project.description}
            thumbnailImg={project.thumbnailImg}
          />
        ))}
      </Container>
      <h2 className="projectSectionTitle">Other projects:</h2>
      <Container className="projectsContainer">
        {otherProjectList?.map((project) => (
          <ProjectCard
            key={project.id}
            projectId={project.id}
            title={project.title}
            description={project.description}
            thumbnailImg={project.thumbnailImg}
          />
        ))}
      </Container>
    </Container>
  );
}

export default ProjectGrid;
