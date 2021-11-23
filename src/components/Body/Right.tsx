import { Contents, Heading } from "./Common";
import Projects from "./Projects";
import Skills from "./Skills";

const Right = () => {
  return (
    <Contents>
      <Heading>Skills</Heading>
      <Skills />
      <Heading>Personal Projects</Heading>
      <Projects />
    </Contents>
  );
};

export default Right;
