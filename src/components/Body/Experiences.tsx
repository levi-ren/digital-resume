import styled from "styled-components";
import { Item, List, SubHeading } from "./Common";

const Company = styled.div`
  color: #4c8bf5;
  font-weight: 500;
`;

const DateLocation = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  font-size: 80%;
  color: #333;
  margin-bottom: 10px;
`;

const Experiences = () => {
  return (
    <List>
      <Item>
        <SubHeading>Angular 2 Developer</SubHeading>
        <div>
          <Company>Yoonet</Company>
          <DateLocation>
            <p>04 / 20 - 06 / 2021</p>
            <p>Balanga City, Bataan</p>
          </DateLocation>
          <p>Achievement / Tasks: </p>
          <List>
            <Item>
              Team Lead—tasked to handle a team of developers, but not as a
              project lead. Main task was to ensure my team members abide to the
              rules and regulations set by the company and the client.
            </Item>
            <Item>
              Front-end developer—tasked to maintain, add, and translate
              features from desktop application to the their Web–App
              (Agriculture App).
            </Item>
            <Item>
              Back-end developer—mostly tasked to add or translate features to a
              REST API application made with C#
            </Item>
          </List>
        </div>
      </Item>

      <Item>
        <SubHeading>React Developer</SubHeading>
        <div>
          <Company>Quantum Crowd Inc.</Company>
          <DateLocation>
            <p>09 / 2019 — 03 / 2020</p>
            <p>Clark Freeport zone, Pampanga</p>
          </DateLocation>
          <p>Achievement / Tasks: </p>
          <List>
            <Item>
              As a Corda Cadet I was tasked to study Corda as my main focus of
              interest. Implemented gained knowledge to create RESTful Corda
              Applications or CordApps.
            </Item>
            <Item>
              As a full-stack developer trainee I was also tasked to create web
              applications mainly focusing on React JS and implementation of
              APIs.
            </Item>
          </List>
        </div>
      </Item>

      <Item>
        <SubHeading>Intern Web Developer</SubHeading>
        <div>
          <Company>Bizwex Web Experts</Company>
          <DateLocation>
            <p>07 / 2018 — 08 / 2018</p>
            <p>Balanga City, Bataan</p>
          </DateLocation>
          <p>Achievement / Tasks: </p>
          <List>
            <Item>
              Tasked to study HTML, CSS, JavaScript, PHP, Lavarel and the basics
              of creating a website: UI/UX designs. Implemented gained knowledge
              on creating a website for a law firm.
            </Item>
          </List>
        </div>
      </Item>
    </List>
  );
};

export default Experiences;
