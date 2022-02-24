import { useEffect, useState } from "react";

export function useFetchData<T>(url: string): {
  data: T | null;
  error: string | null;
  loading: boolean;
} {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const ApiData = await res?.json();
        setLoading(false);
        setData(ApiData.response.data);
        return () => {
          setData(null);
        };
      } catch (err: any) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}
