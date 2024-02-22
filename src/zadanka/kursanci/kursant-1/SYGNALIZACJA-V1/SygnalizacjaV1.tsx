import { useEffect, useState } from "react";
import { Light } from "./Light";

function SygnalizacjaV1() {
  const [states, setStates] = useState({
    red: true,
    yellow: false,
    green: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (states.red) {
        setStates({ red: false, yellow: true, green: false });
      } else if (states.yellow) {
        setStates({ red: false, yellow: false, green: true });
      } else if (states.green) {
        setStates({ red: true, yellow: false, green: false });
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [states]);

  return (
    <div>
      <Light color="red" on={states.red} />
      <Light color="yellow" on={states.yellow} />
      <Light color="green" on={states.green} />
    </div>
  );
}

export { SygnalizacjaV1 };
