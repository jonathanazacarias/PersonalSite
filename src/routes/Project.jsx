import { useParams, useLoaderData } from "react-router-dom";

function Project(props) {
    const { projectId } = useParams();
    const project = useLoaderData();

    return (
        <div>
            {project.title}
        </div>
    )
}

export default Project;