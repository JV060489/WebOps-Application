import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainData } from "./data";
import styled from "styled-components";
import Pages from "./pages/Pages";
import "./styles.css";
import { Navigation } from "./components/UX";

export default function App() {
  // Preload images
  useEffect(() => {
    MainData.map((d) => {
      const img = new Image();
      img.src = d.image;
    });
  }, []);

  return (
    <AppHolder>
      <Routes>
        <Route path="/" element={<Navigate to="/Welcome" replace />} />
        <Route path="/:page" element={<Pages />} />
      </Routes>
      <Navigation />
    </AppHolder>
  );
}

const AppHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto min-content;
  width: 100%;
  height: 100%;
  padding: 5px;
  min-height: -webkit-fill-available;

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
