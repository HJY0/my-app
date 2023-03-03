// import React, { useState } from 'react'

// 이름 내보내기 모듈
export function lookState() {
  console.log("useState");
}

export function lookEffect() {
  console.log("useEffect");
}

// 기본 내보내기 모듈
const React = {
  lookState,
  lookEffect,
};

export default React;

// import suminObject, { lookSumin, lookJinwoo } from './understandingModule'
