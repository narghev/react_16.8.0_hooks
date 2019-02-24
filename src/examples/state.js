import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default State;