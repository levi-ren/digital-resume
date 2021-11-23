import styled from "styled-components";
import { Contents, Heading } from "./Common";
import Experiences from "./Experiences";

const Detail = styled.div`
  font-size: 0.9em;
  padding-left: 20px;
  p {
    text-align: justify;
  }
  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

const Left = () => {
  return (
    <Contents>
      <Heading>Profile Summary</Heading>
      <Detail>
        <p>
          Meticulous fullstack developer with over 2 years of development
          experience and has a passion for creating component based web apps and
          experienced with creation of scalable REST API.
        </p>
        <br />
        <p>
          Always highly motivated to learn the newest technologies this industry
          has to offer and is always committed to delivering promised results
          and remaining true to a unique artistic vision.
        </p>
      </Detail>

      <Heading>Experience</Heading>
      <Experiences />
    </Contents>
  );
};

export default Left;
