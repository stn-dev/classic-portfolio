interface HeaderLinksType {
  label: string;
  href: "#home" | "#about" | "#skill" | "#contact";
}

const headerLinks: HeaderLinksType[] = [
  {
    label: "HOME",
    href: "#home",
  },
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "SKILL",
    href: "#skill",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export default headerLinks;
