import React, { useEffect } from "react";
import { generateToken } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";
const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    const token = localStorage.getItem("access_token");
    if (!token) {
      generateToken(code).then((res) => {
        if (res) navigate("/");
      });
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default Redirect;
