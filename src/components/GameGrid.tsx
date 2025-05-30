import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

import type { GameQuery } from "@/App";
interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error)
    return (
      <Text color="pink.500" fontSize="2xl" fontWeight="600">
        {error}
      </Text>
    );
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={5}
      justifyItems="center"
    >
      {isLoading
        ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}

export default GameGrid;
