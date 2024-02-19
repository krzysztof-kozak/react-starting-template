# Knur React

Startowe repozytorium wraz z gotową konfiguracją.

## Instrukcja

1. Zrób fork repozytorium
   ![](/images//fork.png)
2. Skopiuj **swoje** repozytorium:

```
  git clone git@github.com:TwojaNazwaGithub/react-knur-template.git
```

3. Zainstaluj zależności `npx pnpm install`

4. Pobierz następujące wtyczki do vscode: `Prettier - Code formatter` oraz `ESLint` (dzięki temu w edytorze widać błędy, oraz działa formatowanie "on save").

Zalecana jest też wtyczka do chrome dodająca narzędzia developerkie: https://react.dev/learn/react-developer-tools

## Komendy:

- `npx pnpm install` - instaluje zależności (potrzeba to zrobić tylko raz na początku)
- `pnpm dev` - odpala server developerski
- `pnpm test` - odpala testy
- `pnpm test-ui` - odpala testy + UI dashboard w przeglądarce
