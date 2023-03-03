import { useState } from "react";
import classes from "./ChangeBackground.module.css";

// 일반 함수 vs. 생성자 함수
// function human() {}
// function Human() {}

// 일반 함수(camelCase) vs. 함수 컴포넌트(PascalCase 첫글자가 대문자!!!)
export function changeBackground() {}

export function ChangeBackground() {
  // 함수 컴포넌트의 상태 선언
  const [bgColorState, setBgColorState] = useState("yellow");

  // 이벤트 핸들링
  return (
    <div className={classes.ChangeBackground}>
      <input type="color" title="취향 색상 선택" aria-label="취향 색상 선택" />
      <div className={classes.Box} style={{ background: bgColorState }}></div>
    </div>
  );
}
