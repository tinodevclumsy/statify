import TheHeader from "../components/TheHeader";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  padding: 0 15px;
  margin: 100px auto;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
