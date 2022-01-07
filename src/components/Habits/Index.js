import axios from "axios";
import Footer from "../Footer/Index";
import Header from "../Header/index";
import CreatedHabits from "../CreatedHabits/Index";
import NewHabits from "../NewHabits/Index";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function Habits() {
  const { token } = useContext(TokenContext);
  const [habits, setHabits] = useState([]);
  const [handleHabits, setHandleHabits] = useState(true);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => setHabits(response.data));
    promise.catch((error) => console.log(error.response));
  }, [handleHabits, token, update]);

  return (
    <Container>
      <Header />
      <AddHabits>
        <h1>Meus hábitos</h1>
        <button onClick={() => setHandleHabits(false)}>+</button>
      </AddHabits>
      {handleHabits ? "" : <NewHabits setHandleHabits={setHandleHabits} />}
      {habits.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habits.map((habit) => (
          <CreatedHabits key={habit.id} {...habit} setUpdate={setUpdate} />
        ))
      )}
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
  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 0px 15px;
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
    display: flex;
    align-items: end;
    justify-content: center;
    border: none;
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-size: 27px;
    color: #ffffff;
  }
`;
