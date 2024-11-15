import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseState;