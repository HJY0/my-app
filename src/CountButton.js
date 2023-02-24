import React, { useState, useEffect } from "react";

import "./CountButton.css";

export function CountButton() {
  // 함수 컴포넌트 (상태: useState 훅)
  // [ 초기값, 업데이트 할 수 있는 함수 ] 를 반환
  const [count, updateCount] = useState(3);

  // useEffect [ Side Effects (부수 효과, 리액트가 할 수 없는 것) ] 처리 할 때 사용한다
  // 리액트가 만능은 아니다.
  // 리액트가 할 수 있는 것과 할 수 없는 것이 있다.
  // 그 할 수 없는 것을 처리할 때 useEffect 또는 useLayoutEffect 훅을 사용한다.

  // 사이드이펙트처리기(이펙트호출기() => {
  //   리액트가 못하는 것을 여기서 하면 됩니다.
  // }, [언제 어떤 경우에 이펙트호출기를 실행할까요?]);

  // const [베이비, 베이비상태변경하기] = useState({ 이름: 김현우, 현재상태: 웃는다 });

  // 사이드이펙트처리기(이펙트호출기() => {
  //   유아식을 만든다.
  //   어르고 달랜다.
  //   업고 재운다.
  //   놀아주기
  //   같이 울어주기
  // }, [베이비]);

  // 베이비상태변경하기({ 현재상태: 배고프다고 운다 })

  // 리액트가 할 수 없다는 게 정확히 어떤 것들이 있는지?
  // 타이머 컨트롤 : setTimeout, setInterval (webAPI)
  // 네트워크 통신 요청/응답 : fetch API, AJAX, axios
  // 문서 객체 접근/조작, 이벤트 핸들링

  // X - > 그냥 계속 실행됨
  // [] -> 1번 실행됨
  // [state] -> 안에 들어있는 state가 바뀔 때마다 실행됨

  useEffect(() => {
    const reactLogo = document.querySelector("svg");
    const reactLogoGroup = reactLogo?.querySelector("g");

    // setInterval(() => {
    //   reactLogoGroup.style.fill = "white";
    // }, 1000);

    // setInterval(() => {
    //   reactLogoGroup.removeAttribute("style");
    // }, 2000);
  }, []);

  return (
    <button
      onClick={() => {
        console.log(
          "사용자가 버튼을 클릭하면 count 상태를 업데이트 해주세요!! React Pz"
        );
        updateCount(count + 10);
      }}
    >
      {count}
    </button>
  );
}

// export
// { CountButton }
// import { CountButton } from './CountButton'

// export default
// CountButton
// import CountButton from "./CountButton";
