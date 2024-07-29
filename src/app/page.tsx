
import Image from "next/image";
import Home from "./sections/home/Home";
import Header from "@/components/header/Header";
import About from "./sections/about/About";
import Skill from "./sections/skill/Skill";
import Contact from "./sections/contact/Contact";
import FixedButton from "@/components/fixedButton/fixedButon";

export default function pageContainer() {
  return (
    <main className="layout-container"  >
      <Header />
      <Home />
      <About />
      <Skill />
      <Contact />
      <FixedButton />
    </main>
  );
}
