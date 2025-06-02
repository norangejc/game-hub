import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

function GameHeading() {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);
  
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading size="4xl" marginBottom={4}>
      {heading}{" "}
    </Heading>
  );
}

export default GameHeading;
