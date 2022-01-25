import { useState, useEffect } from "react";

export function useFetch(url, mapperFunction) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(mapperFunction.convertToUser(data));
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [url]);
  return { data, isLoading };
}