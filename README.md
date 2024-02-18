# Knur React

Startowe repozytorium wraz z gotową konfiguracją.

## Instrukcja

1. Skopiuj to repozytorium `git clone https://github.com/krzysztof-kozak/react-starting-template.git`
2. Wejdź do folderu `react-starting-template`
3. Zainstaluj zależności `pnpm install`
4. Pobierz następujące wtyczki do vscode: `Prettier - Code formatter` oraz `ESLint` (dzięki temu w edytorze widać błędy, oraz działa formatowanie "on save").

Zalecana jest też wtyczka do chrome dodająca narzędzia developerkie: https://react.dev/learn/react-developer-tools

## Komendy:

- `pnpm install` - instaluje zależności (potrzeba to zrobić tylko raz na początku)
- `pnpm dev` - odpala server developerski
- `pnpm test` - odpala testy
- `pnpm test-ui` - odpala testy + UI dashboard w przeglądarce

## Lokalny backend:

Na branchu local-backend just ustawiony lokalny backend. Można dzięki temu stworzyć swoje własne lokalne api (alternatywa do używania darmowych API online, takich jak np. https://pokeapi.co/).

1. Wejdź na branch local-backend `git checkout local-backend`
2. Wejdź do folderu backend `cd ./backend`
3. Zainstaluj zależności `pnpm install`
4. Odpal server `pnpm dev`

![](/images/local-backend.png)
