import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./components/Habits/Index";
import Login from "./components/Login/Index";
import Register from "./components/Register/Index";
import Today from "./components/Today/Index";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
        <Route path="/habitos" element={<Habits />}></Route>
        <Route path="/hoje" element={<Today token={token} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
