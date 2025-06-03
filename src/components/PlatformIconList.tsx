import type Platform from "@/entites/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack gap={2}>
      {platforms.slice(0, 10).map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        return (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.id}
            color="gray.700"
          />
        );
      })}
    </HStack>
  );
}

export default PlatformIconList;
