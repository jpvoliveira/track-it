import Footer from "../Footer/Index";
import Header from "../Header/index";
import styled from "styled-components";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function Habits() {
  const { token } = useContext(TokenContext);
  console.log(token)
  return (
    <Container>
      <Header />
      <h1>Histórico</h1>
      <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;

  height: 100vh;
  width: 100vw;

  padding-top: 70px;
  padding-bottom: 70px;

  h1 {
    padding: 28px 15px;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h2 {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 0px 15px;
  }
`;
  
