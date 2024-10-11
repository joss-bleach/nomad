// Icons
import { ApartmentIcon } from "./apartment";
import { BarnIcon } from "./barn";
import { BedAndBreakfastIcon } from "./bed-and-breakfast";
import { CabinIcon } from "./cabin";
import { CampervanIcon } from "./campervan";
import { CasaParticularIcon } from "./casa-particular";
import { CastleIcon } from "./castle";
import { CaveIcon } from "./cave";
import { ContainerIcon } from "./container";
import { CycladicHomeIcon } from "./cycladic-home";
import { DammusoIcon } from "./dammuso";
import { DomeIcon } from "./dome";
import { FarmIcon } from "./farm";
import { GuestHouseIcon } from "./guest-house";
import { HotelIcon } from "./hotel";
import { HouseIcon } from "./house";
import { HouseBoatIcon } from "./house-boat";
import { KezhanIcon } from "./kezhan";
import { MinsuIcon } from "./minsu";
import { RaidIcon } from "./raid";
import { RyokanIcon } from "./ryokan";
import { ShepherdsHutIcon } from "./shepherds-hut";
import { TentIcon } from "./tent";
import { TinyHomeIcon } from "./tiny-home";
import { TowerIcon } from "./tower";
import { TreehouseIcon } from "./treehouse";
import { TrulloIcon } from "./trullo";
import { WindmillIcon } from "./windmill";
import { YurtIcon } from "./yurt";

export const getIcon = (
  name: string,
  variant: "active" | "default" | undefined,
) => {
  switch (name.toLowerCase()) {
    case "apartment":
      return <ApartmentIcon variant={variant} />;
    case "barn":
      return <BarnIcon variant={variant} />;
    case "bedandbreakfast":
      return <BedAndBreakfastIcon variant={variant} />;
    case "cabin":
      return <CabinIcon variant={variant} />;
    case "campervan":
      return <CampervanIcon variant={variant} />;
    case "casaparticular":
      return <CasaParticularIcon variant={variant} />;
    case "castle":
      return <CastleIcon variant={variant} />;
    case "cave":
      return <CaveIcon variant={variant} />;
    case "container":
      return <ContainerIcon variant={variant} />;
    case "cycladichome":
      return <CycladicHomeIcon variant={variant} />;
    case "dammuso":
      return <DammusoIcon variant={variant} />;
    case "dome":
      return <DomeIcon variant={variant} />;
    case "farm":
      return <FarmIcon variant={variant} />;
    case "guesthouse":
      return <GuestHouseIcon variant={variant} />;
    case "hotel":
      return <HotelIcon variant={variant} />;
    case "house":
      return <HouseIcon variant={variant} />;
    case "houseboat":
      return <HouseBoatIcon variant={variant} />;
    case "kezhan":
      return <KezhanIcon variant={variant} />;
    case "minsu":
      return <MinsuIcon variant={variant} />;
    case "raid":
      return <RaidIcon variant={variant} />;
    case "ryokan":
      return <RyokanIcon variant={variant} />;
    case "shepherdshut":
      return <ShepherdsHutIcon variant={variant} />;
    case "tent":
      return <TentIcon variant={variant} />;
    case "tinyhome":
      return <TinyHomeIcon variant={variant} />;
    case "tower":
      return <TowerIcon variant={variant} />;
    case "treehouse":
      return <TreehouseIcon variant={variant} />;
    case "trullo":
      return <TrulloIcon variant={variant} />;
    case "windmill":
      return <WindmillIcon variant={variant} />;
    case "yurt":
      return <YurtIcon variant={variant} />;
    default:
      return null;
  }
};
