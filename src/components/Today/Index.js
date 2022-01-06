import axios from "axios";
import Footer from "../Footer/Index";
import Header from "../Header/index";
import Item from "../Item/index";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import dayjs from "dayjs";
require("dayjs/locale/pt-br");

export default function Today() {
  const [items, setItems] = useState([]);
  const { token } = useContext(TokenContext);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => setItems([
      {
          "id": 3,
          "name": "Acordar",
          "done": true,
          "currentSequence": 1,
          "highestSequence": 1
      }
  ]));
    promise.catch((error) => console.log(error.response));
  }, [token]);

  return (
    <Container>
      <Header />
      <h1>
        {dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}
      </h1>
      <h2>Nenhum hábito concluído ainda</h2>
      {items.length === 0 ? "" : items.map((item) => <Item {...item} />)}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;

  height: 100vh;
  width: 100vw;

  padding: 70px 0px;
  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    padding: 28px 0px 0px 15px;
  }
  h2 {
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
    padding: 0px 0px 28px 15px;
  }
`;
