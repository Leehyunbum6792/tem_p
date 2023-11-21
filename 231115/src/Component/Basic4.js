import React from 'react';

const Basic4 = () => {
  const titleStyle = {
    color: 'orange',
    textDecoration: 'underline',
  };
  const listStyle = {
    padding: 0,
    lineHeight: 1.6,
  };

  const title = 'menu';
  const latte = '라떼';
  const size = 'tall';
  // const price = '4000';

  return (
    <section style={{ borderTop: '1px solid #000' }}>
      <h2 style={titleStyle}>MENU</h2>
      <ul
        style={{ paddingLeft: 0, backgroundColor: 'beige', listStyle: 'none' }}>
        <li style={listStyle}>주문 커피: {title}</li>
        <li style={listStyle}>가격: {latte}</li>
        <li style={listStyle}>사이즈: {size}</li>
      </ul>
    </section>
  );
};

export default Basic4;
