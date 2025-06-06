import type Trailer from "@/entites/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
