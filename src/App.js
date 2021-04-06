import logo from "./logo.svg";
import styled, { ThemeProvider } from "styled-components";

const Theme = {
  primary: "red",
  secondary: "green",
};

const Container = styled.div`
  text-align: center;
`;

const Head = styled.h1`
  color: ${(props) => props.theme.secondary};
`;

const Brand = styled.img`
  width: 50vh;
`;

//btn with props
const Button = styled.button`
  color: #fff;
  background: ${(props) => (props.primary ? "blue" : "green")};
  padding: 0.5rem 1rem;
  border: none;
  margin: 0 1rem;
`;

//extends
const TomatoButton = styled(Button)`
  background: tomato;
`;

//dengan class
const Wrapper = styled.div`
  background: yellow;
  &.test {
    background: red;
  }
`;

const AnotherButton = styled.button`
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `background:blue`;
      case "success":
        return `background:green`;
      default:
        return `background:grey`;
    }
  }}
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Head>styled components</Head>
        <Brand src={logo} alt="" /> <br />
        <Button>click</Button>
        <Button primary>click</Button>
        <TomatoButton>click</TomatoButton>
        <Wrapper>biasa</Wrapper>
        <Wrapper className="test">classname</Wrapper>
        <AnotherButton variant="primary">primary</AnotherButton>
        <AnotherButton variant="success">success</AnotherButton>
        <AnotherButton>gray</AnotherButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
