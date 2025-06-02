import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem
          area="aside"
          paddingX={5}
          display={{
            base: "none",
            lg: "block",
          }}
        >
          <GenreList />
        </GridItem>
        <GridItem area="main" padding={3}>
          <GameHeading />
          <HStack gap={5} marginBottom={3}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
