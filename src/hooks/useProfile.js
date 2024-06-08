import { useState, useEffect } from "react";
import { getProfile } from "../api/SpotifyAPI";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = () => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    } else {
      getProfile()
        .then((res) => {
          setProfile(res);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
  };
};
