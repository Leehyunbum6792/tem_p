import { useState } from 'react';

const Ex1 = () => {
  const [data, setData] = useState();

  const onAdd = () => {};
  const onDel = () => {};
  setData(data.filter((item) => item.id !== 3));

  return (
    <div className="borderTop">
      <button onClick={onAdd}>음료 추가</button>
      <button onClick={onDel}>아이디 3번 음료 삭제</button>
      <ul></ul>
    </div>
  );
};

export default Ex1;
