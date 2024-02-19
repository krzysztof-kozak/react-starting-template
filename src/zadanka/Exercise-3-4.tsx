/* 
ZADANIE 3  WORKSHOP:
Stwórz nowy komponent Tabela.

Zastosuj props o nazwie dane w którym podasz array zawierający:

[{nazwa: "papaj", wiek: 104, obrazek: "jakiś obrazek"}, ...]

Gdzie są 3 kropki dodaj 4 kolejne wpisy w stylu {nazwa: string, wiek: number, obrazek: linkDoObrazka}

Podaj te dane jako PROPS z Twojego komponentu App.

ZADANIE 4 WORKSHOP:
Dodaj do Twojego komponentu Tabela sortowanie poprzez pole wiek na Twoich danych (możesz dodać przyciski albo użyć headera tabeli)

*/

import { useState } from "react";

function Exercise3And4({ data }) {
  const [sortMethod, setSortMethod] = useState("age ascending");

  const sortedData = [...data].sort((a, b) => {
    const shouldSortAsc = sortMethod === "age ascending";
    return shouldSortAsc ? a.wiek - b.wiek : b.wiek - a.wiek;
  });

  const mappedData = sortedData.map((member) => {
    return (
      <li key={member.id} style={{ listStyle: "none" }}>
        <div>
          <p>Nazwa: {member.nazwa}</p>
          <p>Wiek: {member.wiek}</p>
          <img src={member.obrazek} width={100} height={100} />
        </div>
      </li>
    );
  });

  function handleClick() {
    if (sortMethod === "age ascending") {
      setSortMethod("age descending");
    } else {
      setSortMethod("age ascending");
    }
  }

  return (
    <>
      <button onClick={handleClick}>Sort by age</button>

      <p>
        Current sort method: <b>{sortMethod}</b>
      </p>

      {mappedData}
    </>
  );
}

export { Exercise3And4 };
