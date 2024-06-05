import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./page/Home";
import Login from "./page/Login";
import Redirect from "./page/Redirect";
import PlayListDetail from "./page/PlayListDetail";
import Board from "./page/Board";

import { useState } from "react";

import { useProfile } from "./hooks/useProfile";

import ProfileContext from "./context/ProfileContext";
import AlbumContext from "./context/AlbumContext";

function App() {
  const profile = useProfile();
  const [albums, setAlbums] = useState([]);

  return (
    <ProfileContext.Provider value={profile}>
      <AlbumContext.Provider value={{ albums, setAlbums }}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Redirect />} />
            <Route path="/playlist/:id" element={<PlayListDetail />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </MainLayout>
      </AlbumContext.Provider>
    </ProfileContext.Provider>
  );
}

export default App;
