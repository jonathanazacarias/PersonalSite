import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "../src/routes/About.jsx";
import Projects from "../src/routes/Projects.jsx";
import Project from "./routes/Project.jsx";
import Resume from "../src/routes/Resume.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./error-page.jsx";

import { contactAction } from "./utils/actions.js";

import { projectLoader, projectsLoader, resumeLoader, aboutLoader } from "./utils/loaders.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: contactAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
        loader: aboutLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects",
        element: <Projects />,
        loader: projectsLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "project/:projectId",
            element: <Project />,
            loader: projectLoader,
          },
        ]
      },
      {
        path: "resume",
        // resume element expecting 'summary' and 'resumeBody' props
        element: <Resume />,
        loader: resumeLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
