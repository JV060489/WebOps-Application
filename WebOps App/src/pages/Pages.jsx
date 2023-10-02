import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Navigation, Dialogue, Content } from "../components/UX/";

const PageStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto min-content;
  width: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
  border: 1px solid red;

  & > main {
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const Pages = () => {
  const { page } = useParams();

  return (
    <PageStyled>
      <main>Page:{page ? page : "Home"}</main>
      <Dialogue />
    </PageStyled>
  );
};

export default Pages;
