import AboutMe from "../../components/about-me/about-me";
import Contact from "../../components/contact/contact";
import Hero from "../../components/hero/hero";
import Project from "../../components/project/project";
import Skills from "../../components/skills/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
