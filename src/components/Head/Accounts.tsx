import styled from "styled-components";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Skype } from "../../assets/skype.svg";

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: white;
  }
  svg {
    vertical-align: middle;
    width: 32px;
    height: 32px;
  }
  p {
    display: inline-block;
  }

  @media (max-width: 540px) {
    > div,
    a {
      width: 50%;
      margin: 5px 0;
    }

    svg {
      width: 24px;
      height: 24px;
    }

    & :nth-child(2),
    & :nth-child(4) {
      text-align: right;
    }
  }

  @media (max-width: 320px) {
    flex-direction: column;
    > div,
    a {
      width: 100%;
      text-align: center !important;
    }
  }
`;

const Link = ({ children, link }: any) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export const Accounts = () => {
  return (
    <Links>
      <div>
        <Home /> <span>Bataan, Philippines</span>
      </div>
      <Link link="https://www.linkedin.com/in/levi-deang/">
        <LinkedIn /> <span>/in/levi-deang</span>
      </Link>
      <Link link="https://github.com/levi-ren">
        <Github /> <span>/levi-ren</span>
      </Link>
      <div>
        <Skype /> <span>Levi Deang</span>
      </div>
    </Links>
  );
};
