import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react";

function GenreList() {
  const { data: genres } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  return (
    <>
      <Heading size="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {genres?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontSize="lg"
                variant="plain"
                colorPalette="white"
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
