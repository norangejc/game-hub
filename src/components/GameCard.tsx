import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root overflow="hidden" maxW="sm">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </Card.Footer>
    </Card.Root>
  );
}

export default GameCard;
