import styled from "styled-components";
import { useState, useEffect } from "react";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function CountUp({ targetCount, fps = 60 }) {
  const [count, setCount] = useState(0);

  // Timer (Web API)
  // Side Effects

  useEffect(() => {
    let clearId = setInterval(() => {
      if (count >= targetCount) {
        console.log("STOP ANIMATE");
        clearInterval(clearId);
      } else {
        setCount((count) => count + 1);
      }
    }, 1000 / fps);

    return () => clearInterval(clearId);
  }, [count, fps, targetCount]);

  return (
    <CountWrapper>
      <CountDisplay>{count}</CountDisplay>
    </CountWrapper>
  );
}

/* -------------------------------------------------------------------------- */
/*                        Style (CSS in JS)                                   */
/* -------------------------------------------------------------------------- */

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const CountDisplay = styled.span`
  font-size: 80vh;
  font-weight: 100;
  color: #f8b22d;
`;
