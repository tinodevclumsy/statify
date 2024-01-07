import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Redirect from "./page/Redirect";
import PlayListDetail from "./page/PlayListDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Redirect />} />
      <Route path="/playlist/:id" element={<PlayListDetail />} />
    </Routes>
  );
}

export default App;
