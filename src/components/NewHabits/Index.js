import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import TokenContext from "../../contexts/TokenContext";

export default function NewHabits({ setHandleHabits }) {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const { token } = useContext(TokenContext);
  const objectDays = [
    { name: "D", id: "0" },
    { name: "S", id: "1" },
    { name: "T", id: "2" },
    { name: "Q", id: "3" },
    { name: "Q", id: "4" },
    { name: "S", id: "5" },
    { name: "S", id: "6" },
  ];

  function sendHabit(e) {
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        name,
        days,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => {
      setHandleHabits(true);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }

  function selectDay(props) {
    if (days.includes(props.id)) {
      const filterDays = days.filter((item) => item !== props.id);
      setDays(filterDays);
      return;
    }
    setDays([...days, props.id]);
  }

  return (
    <Container>
      <form onSubmit={sendHabit}>
        <input
          value={name}
          type="text"
          placeholder="nome do hábito"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Days>
          {objectDays.map((item) => (
            <Day
              selected={days}
              key={item.id}
              id={item.id}
              onClick={() => selectDay(item)}
            >
              {item.name}
            </Day>
          ))}
        </Days>
        <Buttons>
          <button
            type="button"
            onClick={() => setHandleHabits(true)}
            className="cancel"
          >
            Cancelar
          </button>
          <button className="save">Salvar</button>
        </Buttons>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  height: 180px;
  margin: 0px 15px;
  padding: 18px;
  border-radius: 5px;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  margin-bottom: 29px;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    height: 45px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const Days = styled.div`
  margin-top: 8px;
  margin-bottom: 29px;
  display: flex;
  gap: 4px;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ selected, id }) =>
    selected.includes(id) ? "#cfcfcf" : "#ffffff"};
  color: ${({ selected, id }) =>
    selected.includes(id) ? "#ffffff" : "#cfcfcf"};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Buttons = styled.div`
  margin-left: 160px;
  .cancel {
    border: none;
    width: 84px;
    height: 35px;
    background: #ffffff;
    border-radius: 4.63636px;
    color: #52b6ff;
    font-size: 16px;
    margin-right: 20px;
  }
  .save {
    border: none;
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    color: #ffffff;
    font-size: 16px;
  }
`;
