import styled from "styled-components";

export default function CreatedHabits(props) {
  const days = props.days
  const objectDays = [
    { name: "D", id: "0" },
    { name: "S", id: "1" },
    { name: "T", id: "2" },
    { name: "Q", id: "3" },
    { name: "Q", id: "4" },
    { name: "S", id: "5" },
    { name: "S", id: "6" },
  ];

  return (
    <HabitsBox>
      <div className="head">
        <h1>{props.name}</h1>
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <Days>
        {objectDays.map((item) => (
          <Day
            key={item.id}
            selectedDays={days}
            id={item.id}
          >
            {item.name}
          </Day>
        ))}
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
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ selectedDays, id }) =>
    selectedDays.includes(parseInt(id)) ? "#cfcfcf" : "#ffffff"};
  color: ${({ selectedDays, id }) =>
    selectedDays.includes(parseInt(id)) ? "#ffffff" : "#cfcfcf"};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
`;
