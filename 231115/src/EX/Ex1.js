import React from 'react';

const Coffee = (props) => {
  // 구조분해할당

  return (
    <li>
      주문한 커피는 {props.name}이며 가격은 {props.price}원입니다
    </li>
  );
};

const Ex1 = () => {
  return (
    <div className='"borderTop'>
      <h2>pros 연습 1</h2>
      <ul>
        <Coffee name="아메리카노" price="4000" />
        <Coffee name="카페라떼" price="4500" />
        <Coffee name="바닐라라떼" price="5000" />
      </ul>
    </div>
  );
};

export default Ex1;
