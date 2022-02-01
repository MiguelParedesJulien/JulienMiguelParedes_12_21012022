import { useState, useEffect } from "react";
import axios from "axios";

export function UseFetch(url, mapperFunction) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(mapperFunction.convertToUser(response.data));
      })
      .catch((err) => {
        console.log("ERREUR : " + err);
        setError(true);
      });
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps
  return { data, error };
}
