import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UsersPage from "./pages/users-page/UsersPage.jsx";
import UserPage from "./pages/user-page/UserPage.jsx";
import AlbumsPage from "./pages/albums-page/AlbumsPage.jsx";
import AlbumPage from "./pages/album-page/AlbumPage.jsx";
import NotFoundPage from "./pages/not-found-page/NotFoundPage.jsx";
import MainPage from "./pages/main-page/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "users/",
        element: <UsersPage />,
      },
      {
        path: "users/:id",
        element: <UserPage />,
      },
      {
        path: "albums/",
        element: <AlbumsPage />,
      },
      {
        path: "albums/:id",
        element: <AlbumPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;