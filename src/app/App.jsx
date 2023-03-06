import { useLayoutEffect, useState } from "react";
import { ReactComponent as Sun } from "../images/sun.svg";
import { ReactComponent as Moon } from "../images/moon.svg";
import CountUp from "../components/CountUp/CountUp";
import { GlobalStyle } from "../styles/GlobalStyle";

import styled from "styled-components";

const getRandomNumber = (n) => {
  return Math.round(Math.random() * n);
};

const getRandomMinMax = (min = 0, max = 100) => {
  return getRandomNumber(max - min) + min;
};

// 백업을 하는 이유
const DOCUMENT_TITLE = document.title; // 'React App'

function App() {
  const [targetCount, setTargetCount] = useState(getRandomMinMax(30, 60));

  // 훅의 실행 흐름
  // useEffect 보다 useLayoutEffect 가 더 빠르다.
  useLayoutEffect(() => {
    document.title = `(${targetCount}) ${DOCUMENT_TITLE}`;
  }, [targetCount]);

  const [darkMode, setDarkMode] = useState(false);

  const handleChangeDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
    setTargetCount(getRandomMinMax(30, 60));
  };

  return (
    <div className="App">
      <GlobalStyle dark={darkMode} />
      <StyledButton type="button" onClick={handleChangeDarkMode}>
        {darkMode ? (
          <Sun title="라이트 모드 전환" />
        ) : (
          <Moon title="다크 모드 전환" />
        )}
      </StyledButton>
      <CountUp key={targetCount} targetCount={targetCount} />
    </div>
  );
}

const StyledButton = styled.button`
  position: fixed;
  top: 24px;
  right: 24px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: 0;
  padding: 0;
  background: transparent;

  svg {
    width: inherit;
    height: inherit;
  }
`;

export default App;
