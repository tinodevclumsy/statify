import { useState, useEffect } from "react";
import { getProfile } from "../api/SpotifyAPI";
import { useNavigate, useLocation } from "react-router-dom";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchProfile = () => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    } else if (location !== "/login" && location !== "/callback") {
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

export default useProfile;
