import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Photo from "./Photo.jsx";
import NotFoundPage from "../not-found-page/NotFoundPage.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import FailedToFetchPage from "../failed-to-fetch-page/FailedToFetchPage.jsx";
import Loader from "../../components/Loader.jsx";
import AlbumInfo from "./AlbumInfo.jsx";

export default function AlbumPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDataArray = useMemo(
    () => [
      {
        setFn: setAlbum,
        path: `albums/${id}`,
      },
      {
        setFn: setPhotos,
        path: `albums/${id}/photos`,
      },
    ],
    [id]
  );

  const { error: fetchError, loading: fetchLoading } =
    useFetchData(fetchDataArray);

  const userFetchDataArray = useMemo(() => {
    if (album.userId) {
      return [
        {
          setFn: setUser,
          path: `users/${album.userId}`,
        },
      ];
    }
    return [];
  }, [album.userId]);

  const { error: userFetchError, loading: userFetchLoading } =
    useFetchData(userFetchDataArray);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
    }
    if (userFetchError) {
      setError(userFetchError);
    }
    setLoading(fetchLoading || userFetchLoading);
  }, [fetchError, userFetchError, fetchLoading, userFetchLoading]);

  if (loading) return <Loader />;
  if (error && error.message.includes("404")) {
    return <NotFoundPage />;
  }
  if (error && error.message.includes("Failed to fetch")) {
    return <FailedToFetchPage />;
  }
  return (
    <div className="flex flex-col gap-5">
      <AlbumInfo user={user} album={album} />
      <div className="grid grid-cols-4 gap-5">
        {photos.map((photo) => (
          <Photo photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
}
