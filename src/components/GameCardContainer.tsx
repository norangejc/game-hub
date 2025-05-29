import { Card } from "@chakra-ui/react";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Card.Root width="sm" overflow="hidden">
      {children}
    </Card.Root>
  );
}

export default GameCardContainer;
