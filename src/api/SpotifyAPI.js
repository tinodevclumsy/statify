import api from "./index";

export const getProfile = (code) => {
  return new Promise((resolve, reject) => {
    api
      .get("/me")
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPlaylists = (code) => {
  return new Promise((resolve, reject) => {
    api
      .get("/me/playlists")
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPlayListDetail = ({ id }) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/playlists/${id}`)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
