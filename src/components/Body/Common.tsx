import styled from "styled-components";

export const Contents = styled.div`
  flex: 50%;
  padding: 1rem;
  overflow: hidden;
  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;

export const Heading = styled.h2`
  font-family: "Alegreya Sans SC", sans-serif;
  font-size: 1.5em;
  color: #333;
  margin: 10px 0;
`;

export const SubHeading = styled.h3`
  font-size: 1em;
  color: #4c8bf5;
  margin: 0 0 10px 0;
`;

export const List = styled.ul`
  font-size: 0.9em;
  text-align: justify;
  margin: 0;
  overflow-x: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    padding-left: 1.5rem;
  }
`;

export const Item = styled.li`
  ::marker {
    color: #4c8bf5;
    font-size: 150%;
  }
  :not(:last-child) {
    > div {
      position: relative;
    }
    > div::after {
      content: "";
      height: 100%;
      position: absolute;
      border: 2px solid #4c8af583;
      border-radius: 5px;
      top: 0;
      left: -21px;
    }
  }
`;
