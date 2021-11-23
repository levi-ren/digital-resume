import styled from "styled-components";
import resource from "../../assets/resources.json";
import { Item, List, SubHeading } from "./Common";

const TechStack = styled.div`
  font-size: 80%;
  color: #333;
  margin-bottom: 10px;
`;

interface ProjectProps {
  name: string;
  stack: string;
  descriptions: string[];
}
const Project = ({ name, stack, descriptions }: ProjectProps) => {
  return (
    <Item>
      <SubHeading>{name}</SubHeading>
      <div>
        <TechStack>Tech Stack - {stack}</TechStack>
        <List>
          {descriptions.map((desc, i) => (
            <Item key={i}>{desc}</Item>
          ))}
        </List>
      </div>
    </Item>
  );
};

const Projects = () => {
  return (
    <List>
      {resource.projects.map(({ name, tech, descriptions }) => (
        <Project
          key={name}
          name={name}
          stack={tech}
          descriptions={descriptions}
        />
      ))}
    </List>
  );
};

export default Projects;
