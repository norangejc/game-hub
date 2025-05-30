import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Card.Title>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Footer>
    </GameCardContainer>
  );
}

export default GameCard;
