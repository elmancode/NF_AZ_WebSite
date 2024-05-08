import MainRoot from "../components/root";
import AboutPage from "../pages/about";
import HomePage from "../pages/homepage";
import ProjectsPage from "../pages/projects";
import StructurePage from "../pages/structure";
import UzvOL from "../pages/uzvOL";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "structure",
        element: <StructurePage />,
      },
      {
        path: "uzvol",
        element: <UzvOL />,
      },
    ],
  },
];

export default ROUTES;
