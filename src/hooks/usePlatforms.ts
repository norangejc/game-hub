import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import ms from "ms";
import type Platform from "@/entites/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
export default usePlatforms;
