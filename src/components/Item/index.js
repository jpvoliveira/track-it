import axios from "axios";
import TokenContext from "../../contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function Item(props) {
  const[checked, setChecked] = useState([])
  const { token } = useContext(TokenContext);

  function handleCheck(){
    if(props.done === false){
      setChecked([...checked, props.id])
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        );
        promise.then((response) => props.setUpdate(response));
        promise.catch((error) => console.log(error.response));
      }else{
        setChecked(checked.filter((item) => item !== props.id))
        const promise = axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,
          {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => props.setUpdate(response));
    promise.catch((error) => console.log(error.response));
  }
  }

  return (
    <Box highestSequence={props.highestSequence} currentSequence={props.currentSequence} done={props.done}>
      <div>
        <h3>{props.name}</h3>
        <p>Sequência atual: <span className="atual" >{props.currentSequence} dias</span></p>
        <p>Seu recorde: <span>{props.highestSequence} dias</span></p>
      </div>
      <Check id={props.id} done={props.done} check={checked} onClick={handleCheck}>
        <img src="../assets/Vector.svg" alt="" />
      </Check>
    </Box>
  );
}


const Box = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  height: 94px;

  margin: 0px 15px 10px 15px;
  padding: 13px;
  border-radius: 5px;
  div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
  span{
    color: ${(props)=>props.currentSequence === props.highestSequence && props.currentSequence > 0 ? "#8FC549" : "#666666"};
  }
  .atual{
    color: ${(props)=>props.done ? "#8FC549" : "#666666"}
  }
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  background-color: ${(props)=> props.check.includes(props.id) || props.done ===true ? "#8FC549" : "#ebebeb" };
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  img {
    width: 37px;
    height: 32px;
  }
`;
