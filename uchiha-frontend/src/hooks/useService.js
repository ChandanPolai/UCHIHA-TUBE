import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function useService(fun, dependency = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fun())
      .then((res) => {
        setData(res.payload);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [...dependency]);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
}
