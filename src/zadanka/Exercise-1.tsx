/* 
1 ZADANIE WORKSHOP:

Używając useState stwórzcie taga <p> w którym umieścicie licznik spod useState i przycisk <button> którym będziecie zwiększać licznik.

*/

import { useState } from "react";

function Exercise1() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>increase count</button>
    </>
  );
}

export { Exercise1 };
