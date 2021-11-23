import { FiPhoneCall } from "react-icons/fi";
import { SiMaildotru } from "react-icons/si";
import styled from "styled-components";
import me from "../../assets/me.jpg";
import { Accounts } from "./Accounts";

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  border: 0.3rem white solid;
  margin-bottom: 5em;

  @media (max-width: 800px) {
    margin-bottom: 1em;
  }

  @media (max-width: 530px) {
    margin: 1em;
  }
`;

const Name = styled.div`
  font-weight: 300;
  font-family: "Alegreya Sans SC", sans-serif;
  font-size: 3em;
  color: orange;
`;

const Details = styled.div`
  align-self: flex-start;
  @media (max-width: 420px) {
    align-self: center;
    text-align: center;
  }

  > div:not(:first-child) {
    margin-left: 20px;

    @media (max-width: 420px) {
      margin-left: 0;
    }
  }
`;

const Title = styled.div`
  font-weight: 100;
  font-size: 1em;
  color: white;
`;

const Contacts = styled.div`
  margin-top: 10px;
  color: white;
  > svg {
    vertical-align: middle;
  }
  > p {
    display: inline-block;
    margin: 5px;
  }
`;

const Me = () => {
  return (
    <>
      <Details>
        <Name>Levi Deang</Name>
        <Title>MERN Stack Developer</Title>
        <Contacts>
          <FiPhoneCall /> <p> (+63) 923-022-5111</p>
          <br />
          <SiMaildotru /> <p> arron.levi1@gmail.com</p>
        </Contacts>
      </Details>
      <Image src={me} />
      <Accounts />
    </>
  );
};

export default Me;
