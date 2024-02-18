import { useEffect, useState } from "react";
import { Button } from "./components/button/Button";
import "./index.css";

function App() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/");

      if (response.ok) {
        const result = await response.text();
        setData(result);
      }
    }

    fetchData();
  });

  return (
    <>
      <h1>KNUR + REACT</h1>
      <Button name="click!" />
      <p>Backend response: {data}</p>
    </>
  );
}

export { App };
