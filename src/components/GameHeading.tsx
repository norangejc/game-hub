import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading size="4xl" marginBottom={4}>
      {heading}{" "}
    </Heading>
  );
}

export default GameHeading;
