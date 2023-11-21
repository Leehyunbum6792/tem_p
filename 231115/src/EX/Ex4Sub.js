import React from 'react';

const Ex4Sub = ({ name, type, price, size, color, bgcolor, done }) => {
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <h3 style={{ color: color }}>{name}</h3>
      <ul>
        <li>종류: {type}</li>
        <li>사이즈: {price}</li>
        <li>가격: {size}</li>
        <li>글자색: {color}</li>
        <li>배경색: {bgcolor}</li>
        <li>사실: {done ? '접수' : '미접수'}</li>
      </ul>
    </div>
  );
};

// 초기 props 값 설정. 선택사항
// 자식 컴포넌트.defaultProps = {props명: 초기값}
Ex4Sub.defaultProps = {
  name: '오늘의 커피',
  type: '핫',
  price: '싯가',
  size: 'tall',
  color: '#000',
  bgcolor: '#ddd',
  done: 'false',
};
export default Ex4Sub;
