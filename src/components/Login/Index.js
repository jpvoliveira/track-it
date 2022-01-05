import Container from "./style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function handleLogin(e) {
    setLoading(false);
    e.preventDefault();

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password,
      }
    );
    setTimeout(() => {
      promise.then((response) => {
        console.log(response);
        navigate("/hoje");
      });
    }, 1000);
    promise.catch((error) => {
      setLoading(true);
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
        <button type="submit">{loading ? "Entrar" : <Loading />}</button>
      </form>
      <Link to="/cadastro">
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </Container>
  );

  function Loading() {
    return (
      <Loader
        type="ThreeDots"
        color="#FFFFFF"
        height={50}
        width={50}
        timeout={3000}
      />
    );
  }
}
