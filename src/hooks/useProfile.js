import { useState, useEffect } from "react";
import { getProfile } from "../api/SpotifyAPI";
import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const { updateToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile();
        setProfile(res);
      } catch (e) {
        if (e.response && e.response.status === 401) {
          try {
            const tokenResult = await updateToken();
            if (!tokenResult) {
              throw new Error("Failed to refresh token");
            }
            await fetchData();
          } catch (refreshError) {
            console.error(refreshError);
          }
        }
      }
    };

    if (!localStorage.getItem("access_token")) {
      navigate("login");
    } else {
      fetchData();
    }
  }, []);

  return profile;
};
