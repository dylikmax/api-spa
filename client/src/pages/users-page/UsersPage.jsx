import { useState, useEffect, useMemo } from "react";
import UserCard from "../../components/UserCard.jsx";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import FailedToFetchPage from "../failed-to-fetch-page/FailedToFetchPage.jsx";
import Loader from "../../components/Loader.jsx";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchDataArray = useMemo(
    () => [
      {
        setFn: setUsers,
        path: `users/`,
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
    <div className="grid grid-cols-4 gap-10">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <UserCard user={user}></UserCard>
        </Link>
      ))}
    </div>
  );
}
