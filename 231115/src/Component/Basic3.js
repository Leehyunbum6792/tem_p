import React from 'react';
// js, jsx외 문서는 불러오기
import './Basic.css';
/* 
  이 부분은 js의 영역
  
  rsf 단축키: 선언 함수형 컴포넌트
  rsc 단축키: 함수 표현식 컴포넌트
*/
function Basic3() {
  const listStyle1 = {
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
    padding: 10,
  };
  return (
    <>
      <h2>스타일 적용</h2>
      <ul style={{ padding: 20 }}>
        <li
          style={{
            color: 'tomato',
            fontSize: 18,
            textDecoration: 'underline',
          }}>
          스타일 직접 적용
        </li>
        <li style={listStyle1}>스타일 변수로 적용</li>
        <li className="listStyle2">스타일 외부 문서로 적용</li>
        <li>스타일 프레임워크로 적용</li>
      </ul>
    </>
  );
}

export default Basic3;
