/* 
2 ZADANIE WORKSHOP:

Używając taga <input> oraz eventu onChange wstaw do stanu wartość inputu.
Gdy wartość stanu tego inputu będzie = "papiez" wyświetl <img> z papieżem (obrazek dowolny)
*/

import { useState } from "react";

function Exercise2() {
  const [word, setWord] = useState();

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: 300,
      }}
    >
      <input onChange={handleChange} />
      {word === "papiez" && (
        <img
          src="https://th.bing.com/th/id/OIG1.nh5Y7JGQIM7VMhgNnAGw?pid=ImgGn"
          width={200}
          height={200}
        />
      )}
    </div>
  );
}

export { Exercise2 };
