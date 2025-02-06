import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "../src/routes/About.jsx";
import Projects from "../src/routes/Projects.jsx";
import Resume from "../src/routes/Resume.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./error-page.jsx";

// data is not being pulled from a backend for now, so loading all site content from data file
import * as siteData from "./siteData.json";

// resume content data
const resumeData = siteData.resumeData;
const summary = resumeData.summary;
const headerCard = resumeData.headerCard;
const resumeBody = resumeData.resumeBody;

// about page data
const aboutPageData = siteData.aboutData;



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About data={aboutPageData}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "resume",
        // resume element expecting 'summary' and 'resumeBody' props
        element: <Resume summary={summary} headerCard={headerCard} resumeBody={resumeBody} />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
