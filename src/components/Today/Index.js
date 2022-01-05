import Footer from "../Footer/Index";
import Header from "../Header/index";
import styled from "styled-components";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import dayjs from "dayjs";
require('dayjs/locale/pt-br')

export default function Today() {
  const {token} = useContext(TokenContext)
  console.log(token)
  return (
    <Container>
      <Header />
      <AddHabits>
        <h1>{dayjs().locale('pt-br').format('dddd')}, {dayjs().format('DD/MM')}</h1>     
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

  p {
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
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
