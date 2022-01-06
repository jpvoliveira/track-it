import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <img src={"./assets/Logo.png"} alt="TrackIt" />
      <Profile src={user} alt=""></Profile>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #126ba5;
  height: 70px;
  width: 100vw;

  padding-left: 15px;
  padding-right: 15px;
`;

const Profile = styled.img`
  width: 51px;
  height: 51px;
  left: 306px;
  top: 9px;

  background-color: white;
  border-radius: 98.5px;
`;
