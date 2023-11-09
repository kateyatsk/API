import Albums, { loader as albumsLoader } from "./pages/album/Albums";
import Users, { loader as usersLoader } from "./pages/user/Users";
import User, { loader as userLoader } from "./pages/user/User";
import Album, { loader as albumLoader } from "./pages/album/Album";
import NotFound from "./pages/common/NotFound";
import Layout from "./pages/common/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: "/users/:id",
        loader: userLoader,
        element: <User />,
      },
      {
        path: "/albums/:id",
        loader: albumLoader,
        element: <Album />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
