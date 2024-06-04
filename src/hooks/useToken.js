import { refreshToken } from "../api/AuthAPI";

const useToken = () => {
  const updateToken = async () => {
    const result = await refreshToken()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.error(e);

        throw new Error("Failed refreshing token");
      });
    return result;
  };

  return { updateToken };
};

export default useToken;
