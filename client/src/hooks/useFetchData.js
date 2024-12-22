import { useState, useEffect } from "react";

const API_URL = "http://localhost:8080/";

const useFetchData = (dataForFetch) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (setFn, path) => {
      try {
        const response = await fetch(`${API_URL}${path}`);
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        setFn(data);
      } catch (err) {
        setError(err);
      }
    };

    const fetchPromises = dataForFetch.map(fetch => fetchData(fetch.setFn, fetch.path));

    Promise.all(fetchPromises)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

  }, [dataForFetch]);

  return { error, loading };
};

export default useFetchData;