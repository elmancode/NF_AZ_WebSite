import MainRoot from "../components/root";
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
    ],
  },
];

export default ROUTES;
