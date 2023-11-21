/* 
  import React from 'react'; // node-modules에서 가져옴
    ㄴ 컴포넌트명: 첫글자는 반드시 대문자로 시작
    ㄴ 연결 파일: .js, .jsx, .css, .png, .svg ...

    function 컴포넌트명() {}
    const 컴포넌트명 = () => {
      return (
        <> <- fragment
        JSX
        화면에 보이는 영역
        html과 비슷하나 태그가 아님
        개발을 쉽게 하기 위해 태그 형식으로 사용
        </>
      )
    }

    export default 컴포넌트명; 기본으로 내보내는 컴포넌트
*/
import './Component/App.css';
import Basic1 from './Component/Basic1';
import Basic2 from './Component/Basic2';
import Basic3 from './Component/Basic3';
import Basic4 from './Component/Basic4';
import Basic5 from './Component/Basic5';
import Basic6 from './Component/Basic6';
import Ex1 from './EX/Ex1';
import Ex2 from './EX/Ex2';
import Ex3 from './EX/Ex3';
import Ex4 from './EX/Ex4';
import Ex5 from './EX/Ex5';
import Event1 from './Component/Event1';
import Target from './Component/Target';
import Map from './Component/Map';

function App() {
  return (
    <>
      <Basic1 />
      <Basic2 />
      <Basic3 />
      <Basic4 />
      <Basic5 />
      <Basic6 />
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 />
      <Event1 />
      <Target />
      <Map />
    </>
  );
}

// 함수를 내보내겠다
export default App;
