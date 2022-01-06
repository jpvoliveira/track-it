import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./components/Habits/Index";
import Login from "./components/Login/Index";
import Register from "./components/Register/Index";
import Today from "./components/Today/Index";
import Historic from "./components/Historic/Index";
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Register />}></Route>
            <Route path="/habitos" element={<Habits />}></Route>
            <Route path="/hoje" element={<Today />}></Route>
            <Route path="/historico" element={<Historic />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}
