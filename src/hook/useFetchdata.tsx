import { useEffect, useState } from "react";

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}
function useFetchdata(URL: string) {
  const [data, setData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /// Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const postData = await response.json();
        setData(postData);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return { data, loading, error };
}

export default useFetchdata;
