import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Counter App</h1>
      
      <p>Counter: {count}</p>
      
      <button 
      onClick={() => setCount((prev) => prev + 1)}
      >Add One More
      </button>
    </>
  );
}
