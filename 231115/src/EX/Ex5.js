import React from 'react';

// 하위 컴포넌트/*  */
function Ex5Box({ width, height, bgColor, border, title }) {
  const borderStyle = border || ['2px', 'dotted', '#000'];
  const boxStyle = {
    width: width || 150,
    height: height || 50,
    backgroundColor: bgColor || '#ddd', // bgColor를 backgroundColor로 수정
    borderWidth: borderStyle[0],
    borderStyle: borderStyle[1],
    borderColor: borderStyle[2],
    margin: '20px auto',
    padding: '10px',
  };
  return <div style={boxStyle}>{title}</div>;
}

// Ex5Box.defaultProps = {}

const Ex5 = () => {
  return (
    <div className="borderTop">
      <h2>스타일 속성(props) 넘기기</h2>
      <Ex5Box width={100} height={100} bgColor={'orange'} title="box1" />
      <Ex5Box border={['6px', 'solid', 'red']} title="box2" />
    </div>
  );
};

export default Ex5;
