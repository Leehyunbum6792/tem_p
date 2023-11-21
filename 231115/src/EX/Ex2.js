import React from 'react';
import Ex2Sub from './Ex2Sub';

const Ex2 = () => {
  const latte = { name: '카페라떼', price: '4000' };

  return (
    <div className="borderTop">
      <h2>pros 연습 2</h2>
      <Ex2Sub name="아메리카노" price="3000" />
      <Ex2Sub name={latte.name} price={latte.price} />
      <Ex2Sub {...latte} />
    </div>
  );
};

export default Ex2;
