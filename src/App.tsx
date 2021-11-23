import styled from "styled-components";
import Body from "./components/Body/Body";
import Header from "./components/Head/Header";

const Paper = styled.div`
  padding: 1rem;
  background-color: white;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;

const App = () => {
  return (
    <Paper className="app">
      <Header />
      <Body />
    </Paper>
  );
};

export default App;
