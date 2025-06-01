import usePlatform from "@/hooks/usePlatform";
import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import { Button, Menu, Portal, SkeletonText } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data: platforms, error, isLoading } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
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
                  onClick={() => onSelectPlatform(platform)}
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
