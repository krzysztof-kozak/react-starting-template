/* 
ZADANIE 5 WORKSHOP:

- używając hooka useEffect pobierz dane z servera oraz aktualizuj te dane co minute (setInterval)
- przechowuj te dane w stanie (useState)
- pamiętaj aby usunąć setInterval gdy twój komponent zniknie z ekranu.

Dodajcie pole input zawierające:
-latitude - domyślna wartość - 52.52
-longitude - domyślna wartość - 13.41

LINK DO API:
https://api.open-meteo.com/v1/forecast?latitude={latitude ze state}&longitude={longitude ze state}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m

- podmień latitude i longitude z tego linka na wartość Twojego inputu.
- użyj useEffect aby zaktualizować dane po zmianie latitude / longitude i pobrać aktualne dane z API.

Wyświetl na stronie następujące dane z API:
- aktualna temperatura - current.temperature_2m + current_units.temperature_2m
- aktualna prędkość wiatru - current.wind_speed_10m + current_units.wind_speed_10m
- aktualna godzina z API - current.time

Zmieńcie tło w zależności od temperatury - od ciemnoniebieskiego do czerwonego / skala według uznania
Jeśli temperatura osiągnie -10 stopni wyświetl alert z treścią ale pizga
*/

import { useEffect, useState } from "react";

const long = 50.0546;
const lat = 19.9351;

const API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiResponse = Record<string, any>;

function Exercise5() {
  const [weatherData, setWeatherData] = useState<ApiResponse | undefined>();

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(API);

      const data = await response.json();

      const { current, current_units } = data;

      const temperature = `${current.temperature_2m}${current_units.temperature_2m}`;
      const windSpeed = `${current.wind_speed_10m}${current_units.wind_speed_10m}`;
      const time = current.time;

      setWeatherData({ temperature, windSpeed, time });
    }

    fetchWeather();
  }, []);

  if (!weatherData) {
    return <h1>loading data...</h1>;
  }

  return (
    <>
      <p>Temperatura: {weatherData.temperature}</p>
      <p>Wiatr: {weatherData.windSpeed}</p>
      <p>Czas: {weatherData.time}</p>
    </>
  );
}

export { Exercise5 };
