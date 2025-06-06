import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import APIClient from "@/services/api-client";
import ms from "ms";
import type Genre from "@/entites/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
