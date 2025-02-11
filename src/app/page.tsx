
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Skill from "./sections/skill/Skill";
import Contact from "./sections/contact/Contact";
import FixedButton from "@/components/fixedButton/fixedButon";

export default function pageContainer() {

  return (
    <>
      <Home />
      <About />
      <Skill />
      <Contact />
      <FixedButton />
    </>
  );
}
