import Container from "./style";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register(){
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");

  function handleSignUp(e){
    e.preventDefault();

		const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
			email: email,
			name: name,
			image: image,
			password: password
		});
    promise.then(response => {console.log(response)})
    promise.catch(error => {alert(error.response.data.message)})
  }

    return(
    <Container>
      <img src="./assets/LogoImage.png" alt="Logo TrackIt" />
      <form onSubmit={handleSignUp}>
        <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
        <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} required/>
        <input type="url" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} required/>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <span>Já tem uma conta? Faça login!</span>
      </Link>
    </Container>
  );
}