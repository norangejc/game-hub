import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, Portal, SkeletonText } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function PlatformSelector() {
  const { data: platforms, error, isLoading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" colorPalette="blue">
          <BsChevronDown /> {selectedPlatform?.name || "Platforms"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {isLoading ? (
              <SkeletonText noOfLines={2} />
            ) : (
              platforms?.results.map((platform) => (
                <Menu.Item
                  key={platform.id}
                  value={platform.slug}
                  onClick={() => setSelectedPlatformId(platform.id)}
                >
                  {platform.name}
                </Menu.Item>
              ))
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
