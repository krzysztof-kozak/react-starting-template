Gites, kila uwag:
Używanie indexu tablicy jako klucza to zła praktyka, tutaj akurat nic złego to nie spowoduje ale warto o tym wiedzieć i wyrobić sobie dobry nawyk.

- https://react.dev/learn/rendering-lists#why-does-react-need-keys
- w typ wypadku możesz użyć name, albo np. dopisać sobie unikatowe id do każdej osoby

Zauważ, że dwa razy filtrujesz tablicę. Zastanów się czy możesz zrobićto tylko raz.

KURSANT: że coś takiego?https://stackoverflow.com/questions/11731072/dividing-an-array-by-filter-function

JA: "Depending on whether this is true or false, I will push the current element onto one of the two new arrays." - tak 👍

```tsx
if(polak) {
array1.push
} else {
array2.push
}

<p>polacy<p>
{array1.map...}
<p>reszta</>
{array2.map...}
```
