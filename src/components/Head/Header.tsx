import styled from "styled-components";
import bg from "../../assets/bg.jpg";
import Me from "./Me";

const Content = styled.div`
  background: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  background-image: url(${bg});
  height: 100%;
  background-position: center;
  padding: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0.5rem;
    font-size: 0.9em;
  }
`;

const Header = () => {
  return (
    <Content>
      <Me />
    </Content>
  );
};

export default Header;
