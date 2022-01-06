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
      <AddHabits>
        <h1>Meus hábitos</h1>
        <button>+</button>
      </AddHabits>
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
`;
const AddHabits = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 28px 15px;
  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    border: none;
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-size: 26.976px;
    line-height: 34px;
    color: #FFFFFF;
    text-align: center;
  }
`;
