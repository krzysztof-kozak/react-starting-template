**ZADANIE 1.**
Zwróć uwagę na twój stan:

```ts
const [states, setStates] = useState({
  red: true,
  yellow: false,
  green: false,
});
```

Ten stan pozwala Ci doprowadzić do niemożliwych lub sprzecznych sytuacji. Np możesz pomylić się w kodzie podczas ustawiana stanu:

```ts
// UPS, POMYLIŁEM SIĘ, TERAZ W KODZIE JEST BUG
setStates({ red: true, yellow: true, green: false });
...
// UPS, TERAZ green jest undefined
setStates({ red: true, yellow: false });
```

Fajnie w miarę możliwości zrobić taki stan, gdzie nie możesz doprowadzić do takiej sytuacji, np:

```ts
type Status = "red" | "yellow" | "green";
const [status, setStatus] = useState<Status>("red");
...
// możesz tutaj podać tylko poprawną opcję
// nie musisz myśleć o innych światłach
setStatus("red")
```

To pozwala Ci także u uprościć stan. Teraz zamiast ubiektu który musi się martwić o poprawną synchronizację wszystkich świateł masz zwykły string.
To też upraszcza ci sprawę w komponencie `< Light />`

```tsx
<Light color="red" on={states.red} />
//VS
<Light color="red" on={status === "red"} />
```

Więcej o tym "wzorcu" (nie wiem jak to nazwać) https://react.dev/learn/choosing-the-state-structure#avoid-contradictions-in-state

```tsx
function Light(props: { color: string; on: boolean }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid black",
        margin: "10px",
        backgroundColor: props.on ? props.color : "white",
      }}
    ></div>
  );
}
```

Mógłbyś się w zasadzie pozbyć propsa `on`

```tsx
<Light color={status === "red" ? "red" : "white"} />
```

Natomiast tutaj decyzję pozostawiam tobie. Nie mam mocnej opini na ten temat
