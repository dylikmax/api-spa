import { useState, useMemo } from "react";
import AlbumCard from "../../components/AlbumCard.jsx";
import { Link } from "react-router-dom";
import NotFoundPage from "../not-found-page/NotFoundPage.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import FailedToFetchPage from "../failed-to-fetch-page/FailedToFetchPage.jsx";
import Loader from "../../components/Loader.jsx";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  const fetchDataArray = useMemo(
    () => [
      {
        setFn: setAlbums,
        path: `albums`,
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
    <div className="grid gap-3">
      {albums.map((album) => (
        <Link to={`/albums/${album.id}`} key={album.id}>
          <AlbumCard album={album}></AlbumCard>
        </Link>
      ))}
    </div>
  );
}
