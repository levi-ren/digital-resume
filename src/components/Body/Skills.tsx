import { MouseEvent, useRef } from "react";
import styled from "styled-components";
import { backEnd, frameworks, frontEnd, tools } from "../../assets/icons";
import { Item, List, SubHeading } from "./Common";

const Pill = styled.div`
  margin: 2px 2.5px;
  color: white;
  border-radius: 50px;
  padding: 5px 15px;
  background-color: #333;
  img {
    width: 32px;
    margin-right: 5px;
  }
  @media (max-width: 800px) {
    margin: 2px 1px;
    padding: 5px 10px;
    img {
      width: 24px;
    }
  }
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-wrap: initial;
    white-space: nowrap;
  }
`;

interface SkillProps {
  heading: string;
  set: { icon?: string; name: string }[];
}
const Skill = ({ heading, set }: SkillProps) => {
  return (
    <Item>
      <SubHeading>{heading}</SubHeading>
      <Content>
        {set.map(({ icon, name }) => (
          <Pill key={name}>
            {icon && <img src={icon} alt={name} />} <p>{name}</p>
          </Pill>
        ))}
      </Content>
    </Item>
  );
};

const GrabbleList = styled(List)`
  @media (max-width: 800px) {
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    & :active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  }
`;

const Skills = () => {
  const list = useRef<HTMLUListElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const down = (e: MouseEvent) => {
    if (list.current) {
      const slider = list.current;
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }
  };

  const up = (e: MouseEvent) => {
    isDown = false;
  };

  const move = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();

    if (list.current) {
      const slider = list.current;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <GrabbleList
      onMouseDown={down}
      onMouseMove={move}
      onMouseUp={up}
      onMouseLeave={up}
      ref={list}
    >
      <Skill heading="Front-end:" set={frontEnd} />
      <Skill heading="Back-end:" set={backEnd} />
      <Skill heading="Framework:" set={frameworks} />
      <Skill heading="Development Tools:" set={tools} />
    </GrabbleList>
  );
};

export default Skills;
