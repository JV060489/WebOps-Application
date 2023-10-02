import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { memo } from "react";
import NavData from "../../../data/elements/NavData";

const outlineColor = "#222327";
const borderThickness = "4px";

function createCSS(navItems) {
  let styles = "";
  for (let i = 0; i < navItems; i += 1) {
    styles += `
     & a:nth-child(${i + 1}).active ~ .indicator {
      transform: translate(calc(100% * ${i}), -50%);
    }
     `;
  }
  return css`
    ${styles}
  `;
}

const StyledNav = styled.nav`
  position: relative;
  padding: 0px 12px;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  border: ${borderThickness} solid ${outlineColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 7px 2px rgb(0 0 0 / 25%);

  display: grid;
  align-items: center;
  align-content: center;
  grid-template-columns: repeat(${({ items }) => items - 1}, 1fr);
  margin: auto;

  & a {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
    z-index: 1;
  }
  & a:nth-child(1) {
    grid-row-start: -1;
    grid-column: 1;
    grid-row: 1;
  }
  & a svg {
    width: 50%;
    height: auto;
    position: relative;
    display: block;
    text-align: center;
    transition: 0.5s;
    color: ${outlineColor};
    margin: auto;
  }
  & a.active svg {
    transform: translateY(-100%);
    fill: white;
  }
  & b {
    position: absolute;
    color: ${outlineColor};
    font-weight: bold;
    font-size: 0.55em;
    font-size: clamp(0.55rem, 0.3214rem + 1.1429vw, 0.75rem);
    transition: 0.5s;
    opacity: 0;
    width: 100%;
    height: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    bottom: 0;
  }
  & a.active b {
    opacity: 1;
  }
  & a:not(.active):hover svg {
    transform: scale(1.5);
  }
  & .indicator {
    grid-column: 1;
    grid-row: 1;
    grid-row-start: -1;
    width: 100%;
    aspect-ratio: 1;
    background: #4c6dce;
    top: 0;
    transform: translate(-0, -50%);
    border-radius: 50%;
    transition: 0.4s;
    border: ${borderThickness} solid ${outlineColor};
  }

  & .indicator svg:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 30%;
    height: 30%;
    -webkit-transform: translate(-99%, -7%) scaleX(-1);
    -moz-transform: translate(-99%, -7%) scaleX(-1);
    -o-transform: translate(-99%, -7%) scaleX(-1);
    transform: translate(-99%, -7%) scaleX(-100%);
  }

  & .indicator svg:nth-child(2) {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 30%;
    height: 30%;
    transform: translate(99%, -7%);
  }

  ${({ items }) => createCSS(items)};
`;

function Navigation(props) {
  console.log(NavData.length);
  return (
    <StyledNav items={NavData.length}>
      {NavData.map((e) => {
        if (!e) return;
        const { path, name, icon, key } = e;
        return (
          <NavLink to={path} key={key}>
            {icon}
            <b>{name}</b>
          </NavLink>
        );
      })}
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.68 390.68">
          <path d="M390.68,1.27V0H0V390.68H1.27C17.29,183,183,17.29,390.68,1.27Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.68 390.68">
          <path d="M390.68,1.27V0H0V390.68H1.27C17.29,183,183,17.29,390.68,1.27Z" />
        </svg>
      </div>
    </StyledNav>
  );
}

export default memo(Navigation);
