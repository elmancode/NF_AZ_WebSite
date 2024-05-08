import MainRoot from "../components/root";
import AboutPage from "../pages/about";
import HomePage from "../pages/homepage";

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
    ],
  },
];

export default ROUTES;
