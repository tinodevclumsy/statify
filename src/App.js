import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./page/Home";
import Login from "./page/Login";
import Redirect from "./page/Redirect";
import PlayListDetail from "./page/PlayListDetail";
import Board from "./page/Board";
import Refresh from "./page/Refresh";

import { useState, useEffect } from "react";

import useProfile from "./hooks/useProfile";

import ProfileContext from "./context/ProfileContext";
import AlbumContext from "./context/AlbumContext";
import { useNavigate } from "react-router-dom";
function App() {
  const { profile } = useProfile();
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const expires = new Date(JSON.parse(localStorage.getItem("expires_at")));
    const now = new Date();
    if (expires && expires < now) {
      navigate("/refresh");
    }
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      <AlbumContext.Provider value={{ albums, setAlbums }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Redirect />} />
          <Route path="/refresh" element={<Refresh />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:id" element={<PlayListDetail />} />
            <Route path="/board" element={<Board />} />
          </Route>
        </Routes>
      </AlbumContext.Provider>
    </ProfileContext.Provider>
  );
}

export default App;
