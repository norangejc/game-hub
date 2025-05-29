import { Box, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <Box paddingY={3}>
      <SkeletonText noOfLines={2} />
    </Box>
  );
}

export default GenreListSkeleton;
