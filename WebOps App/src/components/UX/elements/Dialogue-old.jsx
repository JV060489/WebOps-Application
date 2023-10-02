import { memo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGlobal from "../../../utility/useGlobal";

const StyledDialogue = styled.section`
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-bottom: clamp(0.5rem, 10vw, 2rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45px auto;
  position: relative;
  align-items: end;

  & h1 {
    grid-column: 1/-1;
    grid-row: 1;
    font-family: "Luckiest Guy", Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 0px;
    line-height: 0.55;
    font-size: clamp(2rem, 6vw, 3rem);
    display: flex;
    justify-content: start;
    align-items: flex-end;
  }
  & img {
    grid-column: 2;
    grid-row: 1;
    width: 55vw;
    max-width: 250px;
    justify-self: end;
    transform: translateY(26.5%);
    z-index: 1;
  }
  & div {
    display: grid;
    align-items: start;
    grid-column: 1/-1;
    height: 100%;
    border: 4px solid black;
    padding: 19px;
    position: relative;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 0 10px 10px 10px;
    font-size: clamp(0.7rem, 4vw, 1rem);
  }
`;

function Dialogue(props) {
  const { page } = useParams();

  const currentData = useGlobal((state) => state.currentData);
  const { name, dialoge, image } = currentData(page);

  return (
    <StyledDialogue>
      <img src={image} alt="Placeholder" />
      <h1>{name}</h1>
      <div>{dialoge}</div>
    </StyledDialogue>
  );
}

export default memo(Dialogue);
