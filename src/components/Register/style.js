import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 100px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
  input {
    display: flex;
    margin-bottom: 5px;

    width: 303px;
    height: 45px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
  button {
    border: none;
    width: 303px;
    height: 45px;

    background: #52b6ff;
    border-radius: 4.63636px;

    font-size: 20.976px;
    line-height: 26px;
    color: #ffffff;
  }
  a {
    margin-top: 25px;
    text-decoration: none;

    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
  }
`;

export default Container;
