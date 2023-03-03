import { useRef, useEffect } from "react";
import classes from "./ChangeBackground.module.css";

export function ChangeBackgroundImperative() {
  // 사용자가 조정할 수 있는 입력 컨트롤(컬러 인풋)
  const colorInputRef = useRef(null); // { current: 초깃값 }
  const boxRef = useRef(null); // { current: 초깃값 }

  // 함수 내부는 실제 문서 요소에 접근할 수 없어요.
  // console.log(colorInputRef);

  useEffect(() => {
    // 이 곳에서는 접근 가능해요.
    // console.log('effect:', colorInputRef.current);
    colorInputRef.current.addEventListener("input", (e) => {
      // console.log(e.target.value);
      boxRef.current.style.backgroundColor = e.target.value;
    });
  }, []);

  return (
    <div className={classes.ChangeBackground}>
      <input
        ref={colorInputRef}
        type="color"
        title="취향 색상 선택"
        aria-label="취향 색상 선택"
      />
      <div ref={boxRef} className={classes.Box}></div>
    </div>
  );
}
