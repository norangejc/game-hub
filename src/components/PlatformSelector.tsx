import type { Platform } from "@/hooks/useData";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, SkeletonText } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data: platforms, error, isLoading } = usePlatforms();
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
              platforms.map((platform) => (
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
