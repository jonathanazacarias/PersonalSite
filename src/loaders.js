import * as siteData from "./siteData.json";
import { redirect } from "react-router-dom";
import axios from "axios";

const siteAPIBaseURL = "http://localhost:3000";

const resume = siteData.resumeData;
const projects = siteData.projectData.projects;
const about = siteData.aboutData;

// // ex for getting from db
// export async function projectLoader({params}) {
//     const projectId = params.projectId;
//     try {
//         const data = await axios.get(`${siteAPIBaseURL}/projects/${projectId}`, {
//             withCredentials: true,
//         });

//         return data.data;
//     } catch (error) {
//         return redirect("/projects");
//     }
// }

export async function aboutLoader() {
  try {
    const data = await about;

    return data;

  } catch (error) {
    return redirect("/");
  }
}

export async function resumeLoader() {
  try {
    const data = await resume;

    return data;

  } catch (error) {
    return redirect("/");
  }
}

export async function projectsLoader() {
  try {
    const data = await projects;

    return data;

  } catch (error) {
    return redirect("/projects");
  }
}

export async function projectLoader({ params }) {
  const projectId = params.projectId;
  try {
    const data = await getProject(projectId);

    return data;

  } catch (error) {
    return redirect("/projects");
  }
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
}
