import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//import useGlobal from "../../../utility/useGlobal";
import { MainData } from "../../../data/";
import { useTransition, config, animated as a } from "react-spring";

function Dialogue(props) {
  const { page } = useParams();
  const curPage = page || "Welcome";

  //const currentData = useGlobal((state) => state.currentData);
  const { name, dialoge, image } = MainData.filter(
    ({ name }) => name === curPage
  )[0];
  console.log({ curPage, MainData, name, dialoge, image });
  console.count("dialogue");
  const [toggle, set] = useState(false);

  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!toggle)
  });

  /*
  return transitions(({ opacity }, item) =>
    item ? (
      <StyledDialogue>
      <img src={image} alt="Placeholder" />
      <h1>{name}</h1>
      <div>{dialoge}</div>
    </StyledDialogue>
    ) : (
      <a.div
        style={{
          position: "initial",
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] })
        }}
      >
        retest
      </a.div>
    )
  );
  */

  return (
    <StyledDialogue>
      <img src={image} alt="Placeholder" />
      <h1>{name}</h1>
      <div>{dialoge}</div>
    </StyledDialogue>
  );
}

export default memo(Dialogue);

const StyledDialogue = styled.section`
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-bottom: clamp(0.25rem, 2vw, 1rem);
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
    font-color: red;
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
