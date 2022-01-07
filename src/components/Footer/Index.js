import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react/cjs/react.development";
import HabitsCheckContext from "../../contexts/HabitsCheckContext";

export default function Footer() {
  const {habitsCheck} = useContext(HabitsCheckContext)
  return (
    <Container>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
      <CircularButton >
      <CircularProgressbar
        value={habitsCheck}
        text={'Hoje'}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
      </CircularButton>
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #ffffff;
  height: 70px;
  width: 100vw;

  padding-left: 15px;
  padding-right: 15px;

  p {
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
`;

const CircularButton = styled.div`
  position:absolute;
  width: 90px;
  height:90px;
  bottom:0px;
  margin-left: -40px;
`;
