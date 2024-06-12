import api from "./auth";

export const generateToken = (code) => {
  return new Promise((resolve, reject) => {
    api
      .post("/token", {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        code_verifier: localStorage.getItem("code_verifier"),
        redirect_uri: `${process.env.REACT_APP_SITE_URL}/callback`,
        code,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          resolve(true);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
