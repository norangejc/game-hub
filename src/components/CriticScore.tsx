import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={3} borderRadius={3} colorPalette={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
