import styled from "styled-components";
import { LinkButton } from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { refreshToken } from "../api/AuthAPI";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

const NavContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Refresh = () => {
  const navigate = useNavigate();

  const onSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_at");
    navigate("/login");
  };

  const onRefresh = () => {
    refreshToken().then((res) => {
      if (res) navigate("/");
    });
  };

  return (
    <Container>
      <h2>Your session has expired.</h2>
      <NavContainer>
        <LinkButton onClick={onRefresh}>Refresh Session</LinkButton>
        <span>or</span>
        <LinkButton onClick={onSignOut}>Sign out</LinkButton>
      </NavContainer>
    </Container>
  );
};

export default Refresh;
