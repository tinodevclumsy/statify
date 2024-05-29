import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Redirect from "./page/Redirect";
import PlayListDetail from "./page/PlayListDetail";
import Board from "./page/Board";

import TheHeader from "./components/TheHeader";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "./api/SpotifyAPI";
import { refreshToken } from "./api/AuthAPI";

import ProfileContext from "./context/ProfileContext";
import AlbumContext from "./context/AlbumContext";

function App() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState();
  const [albums, setAlbums] = useState([]);

  const handleToken = () => {
    refreshToken().then((res) => {
      if (res) {
        getProfile().then((res) => {
          setProfile(res);
        });
      }
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    } else {
      getProfile()
        .then((res) => {
          console.log(res);
          setProfile(res);
        })
        .catch((e) => {
          if (e.response.status === 401) {
            handleToken();
          }
        });
    }
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      <AlbumContext.Provider value={{ albums, setAlbums }}>
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Redirect />} />
          <Route path="/playlist/:id" element={<PlayListDetail />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </AlbumContext.Provider>
    </ProfileContext.Provider>
  );
}

export default App;
