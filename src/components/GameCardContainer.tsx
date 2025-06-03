import { Card } from "@chakra-ui/react";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Card.Root
      width="100%"
      overflow="hidden"
      _hover={{
        cursor: "pointer",
        borderColor: "purple.800",
        transition: ".20s ease",
      }}
    >
      {children}
    </Card.Root>
  );
}

export default GameCardContainer;
