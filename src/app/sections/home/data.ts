import { IconType } from "@/components/icons";

interface SocialMediaType {
  href: string;
  icon: keyof IconType;
}
interface ScrollDownLetterType {
  scrowl: { letter: string }[];
  down: { letter: string }[];
}

export const socialMediaData: SocialMediaType[] = [
  {
    href: "https://www.facebook.com/stn.raf.9",
    icon: "facebook",
  },
  {
    href: "https://www.instagram.com/rafstn/",
    icon: "instagram",
  },
  {
    href: "https://wa.me/+261388209064?bo?text=Hello%2C%20ifeel%20free%20to%20reach%20out%20to%20me",
    icon: "whatsapp",
  },
];

export const scrowlDownLetterData: ScrollDownLetterType = {
  scrowl: [
    { letter: "s" },
    { letter: "c" },
    { letter: "r" },
    { letter: "o" },
    { letter: "l" },
    { letter: "l" },
  ],
  down: [{ letter: "d" }, { letter: "o" }, { letter: "w" }, { letter: "n" }],
};
