import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

function GameCardSkeleton() {
  return (
    <GameCardContainer>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
      <Card.Footer>
        <SkeletonText />
      </Card.Footer>
    </GameCardContainer>
  );
}

export default GameCardSkeleton;
