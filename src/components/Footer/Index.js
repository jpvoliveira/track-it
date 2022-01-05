import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p>Hábitos</p>
      <p>Histórico</p>
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
