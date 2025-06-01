import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
function GenreList({ onSelectGenre, selectedGenreId }: Props) {
  const { data: genres } = useGenres();
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
                onClick={() => onSelectGenre(genre)}
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
