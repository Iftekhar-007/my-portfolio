import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home";
import ProjectDetail from "../Components/ProjectDetail";
import ProjectCrad from "../Components/ProjectCrad";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetail,
      },
      {
        path: "/projects",
        Component: ProjectCrad,
      },
    ],
  },
]);

export default router;
