import { useEffect, useState, useRef } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url, debounceDelay = 300) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    // Debounce the fetch to prevent rapid successive calls
    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        try {
          // Cancel previous request if it exists
          if (abortControllerRef.current) {
            abortControllerRef.current.abort();
          }

          abortControllerRef.current = new AbortController();
          
          setLoading(true);
          setError(false);
          
          const res = await makeRequest.get(url, {
            signal: abortControllerRef.current.signal,
          });

          setData(res.data.data);
        } catch (err) {
          if (err.name !== 'AbortError' && err.name !== 'CanceledError') {
            setError(true);
          }
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, debounceDelay);

    return () => {
      clearTimeout(timeoutId);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url, debounceDelay]);

  return { data, loading, error };
};

export default useFetch;
