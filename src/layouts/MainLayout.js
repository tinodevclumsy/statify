import TheHeader from "../components/TheHeader";
import styled from "styled-components";
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  max-width: 750px;
  padding: 0 15px;
  margin: 100px auto;
`;

const MainLayout = () => {
  return (
    <>
      <TheHeader />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
