import styled from "styled-components";

export default function CreatedHabits(props) {
    return (
      <HabitsBox>
        <div className="head">
          <h1>{props.name}</h1>
          <ion-icon name="trash-outline"></ion-icon>
        </div>
        <Days>
          <div>D</div>
          <div>S</div>
          <div>T</div>
          <div>Q</div>
          <div>Q</div>
          <div>S</div>
          <div>S</div>
        </Days>
      </HabitsBox>
    );
  }

  const HabitsBox = styled.div`
  background-color: #ffffff;
  height: 91px;
  margin: 0px 15px;
  margin-bottom: 10px;
  padding: 13px;
  border-radius: 5px;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  .head {
    display: flex;
    justify-content: space-between;
  }
`;

const Days = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 4px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: "#ffffff";
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    color: #cfcfcf;
  }
`;
