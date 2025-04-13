import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>카운트: {count}</h1>
      <button className="btn increment" onClick={increment}>증가</button>
      <button className="btn decrement" onClick={decrement}>감소</button>
    </div>
  );
}

export default Counter;
