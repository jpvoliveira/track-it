import Container from "./style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password,
      }
    );
    promise.then((response) => {
      console.log(response);
      navigate("/hoje");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  return (
    <Container>
      <img src="./assets/LogoImage.png" alt="" />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Container>
  );
}
