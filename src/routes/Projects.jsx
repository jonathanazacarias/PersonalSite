
import "./routesCSS/projects.css";
import ProjectGrid from "../components/projects/ProjectGrid";
import { useOutlet, useLoaderData } from "react-router-dom";


function Projects() {
  const outlet = useOutlet();
  const projects = useLoaderData();

  return (
    <>
     {outlet || <ProjectGrid projectList={projects}/>}
    </>
    
  )
}

export default Projects;
