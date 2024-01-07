import React, { useEffect } from "react";
import { sha256, base64encode, generateRandomString } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const codeVerifier = generateRandomString(64);
  window.localStorage.setItem("code_verifier", codeVerifier);
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = "http://localhost:3000/callback";

  const scope = "user-read-private user-read-email playlist-read-private";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const requestAuth = async () => {
    try {
      const hashed = await sha256(codeVerifier);
      const codeChallenge = base64encode(hashed);
      const params = {
        response_type: "code",
        client_id: clientId,
        scope,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
      };

      authUrl.search = new URLSearchParams(params).toString();
      window.location.href = authUrl.toString();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      requestAuth();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <p>Authorizing...</p>
    </div>
  );
};

export default Login;
