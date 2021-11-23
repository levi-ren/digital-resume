import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";

const Contents = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Body = () => {
  return (
    <Contents>
      <Left />
      <Right />
    </Contents>
  );
};

export default Body;
