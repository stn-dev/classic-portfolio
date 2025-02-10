import { IconType } from "@/components/icons";

interface InformationDataType {
  text: string;
  className: "mail" | "phone" | "localisation";
  iconType: keyof IconType;
}

export const informationData: InformationDataType[] = [
  {
    text: "mariosantatra@gmail.com",
    className: "mail",
    iconType: "message",
  },
  {
    text: "+261 38 82 090 64",
    className: "phone",
    iconType: "phone",
  },
  {
    text: "Madagascar / Tana",
    className: "localisation",
    iconType: "localisation",
  },
];
