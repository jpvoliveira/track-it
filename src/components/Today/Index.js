import axios from "axios";
import Footer from "../Footer/Index";
import Header from "../Header/index";
import Item from "../Item/index";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import HabitsCheckContext from "../../contexts/HabitsCheckContext";
import dayjs from "dayjs";
require("dayjs/locale/pt-br");

export default function Today() {
  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState([]);
  const { token } = useContext(TokenContext);
  const { setHabitsCheck, habitsCheck } = useContext(HabitsCheckContext);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => {
      setItems(response.data);
      let newCont = 0;
      response.data.forEach((item) => item.done && (newCont += 1));
      setCont(newCont);
      setHabitsCheck((newCont / response.data.length) * 100);
    });
    promise.catch((error) => console.log(error.response));
  }, [update, token]);

  return (
    <Container cont={cont}>
      <Header />
      <h1>
        {dayjs().locale("pt-br").format("dddd")}, {dayjs().format("DD/MM")}
      </h1>
      <h2>
        {cont > 0
          ? habitsCheck.toFixed(0) + "% dos habitos concluidos"
          : "Nenhum hábito concluído ainda"}
      </h2>
      {items.length === 0
        ? ""
        : items.map((item) => (
            <Item key={item.id} {...item} setUpdate={setUpdate} />
          ))}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
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
    color: ${(props) => (props.cont > 0 ? "#8FC549" : "#bababa")};
    padding: 0px 0px 28px 15px;
  }
`;
