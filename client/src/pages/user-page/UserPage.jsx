import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import AlbumCard from "../../components/AlbumCard.jsx";
import NotFoundPage from "../not-found-page/NotFoundPage.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import FailedToFetchPage from "../failed-to-fetch-page/FailedToFetchPage.jsx";
import Loader from "../../components/Loader.jsx";
import UserInfo from "./UserInfo.jsx";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);

  const fetchDataArray = useMemo(
    () => [
      {
        setFn: setUser,
        path: `users/${id}`,
      },
      {
        setFn: setAlbums,
        path: `users/${id}/albums`,
      },
    ],
    []
  );

  const { error, loading } = useFetchData(fetchDataArray);

  if (loading) return <Loader />;
  if (error && error.message.includes("404")) {
    return <NotFoundPage />;
  }
  if (error && error.message.includes("Failed to fetch")) {
    return <FailedToFetchPage />;
  }
  return (
    <div className="flex gap-5">
      <UserInfo user={user}/>
      <div className="bg-slate-700 rounded-lg p-5 grid gap-1">
        Albums:
        {albums.map((album) => (
          <Link to={`/albums/${album.id}`} key={album.id}>
            <AlbumCard album={album}></AlbumCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
