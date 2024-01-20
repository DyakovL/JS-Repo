function attachEvents() {
  document
    .querySelector("#submit")
    .addEventListener("click", getWeatherDataForLocation);
  let currentWeather = document.querySelector("#current");
  let upcomingWeather = document.querySelector("#upcoming");

  const weatherSymbols = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
  };

  const API_URL = "http://localhost:3030/jsonstore/forecaster/";

  function getWeatherDataForLocation() {
    let city = document.querySelector("#location").value;

    fetch(`${API_URL}/locations`)
      .then((res) => res.json())
      .then((location) => {
        const currLocation = location.find(
          (l) => l.name.toLowerCase() === city.toLowerCase()
        );

        getCurrentWeather(currLocation.code);
        getUpcomingWeather(currLocation.code);
        document.querySelector("#forecast").style.display = "block";
      })
      .catch((error) => {
        document.querySelector("#forecast").textContent = "Error";
        console.error("Error", error);
      });

    function getCurrentWeather(code) {
      let currWeatherContainer = document.createElement("div");
      currWeatherContainer.classList.add("forecasts");
      let spanContainer = document.createElement("span");
      spanContainer.classList.add("condition");

      fetch(`${API_URL}/today/${code}`)
        .then((res) => res.json())
        .then((data) => {
          currWeatherContainer.appendChild(
            createElement(
              weatherSymbols[data.forecast.condition],
              "condition",
              "symbol"
            )
          );
          spanContainer.appendChild(createElement(data.name, "forecast-data"));
          spanContainer.appendChild(
            createElement(
              `${data.forecast.low}°/${data.forecast.high}°`,
              "forecast-data"
            )
          );
          spanContainer.appendChild(
            createElement(data.forecast.condition, "forecast-data")
          );
          currWeatherContainer.appendChild(spanContainer);
          currentWeather.appendChild(currWeatherContainer);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }

    function getUpcomingWeather(code) {
      const upcomingWeatherContainer = document.createElement("div");
      upcomingWeatherContainer.classList.add("forecast-info");

      fetch(`${API_URL}/upcoming/${code}`)
        .then((res) => res.json())
        .then((data) => {
          data.forecast.forEach((forecastElement) => {
            const spanContainer = document.createElement("span");
            spanContainer.classList.add("upcoming");
            spanContainer.appendChild(
              createElement(weatherSymbols[forecastElement.condition], "symbol")
            );
            spanContainer.appendChild(
              createElement(
                `${forecastElement.low}°/${forecastElement.high}°`,
                "forecast-data"
              )
            );
            spanContainer.appendChild(
              createElement(forecastElement.condition, "forecast-data")
            );
            upcomingWeatherContainer.appendChild(spanContainer);
            upcomingWeather.appendChild(upcomingWeatherContainer);
          });
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }

    function createElement(content, ...className) {
      const element = document.createElement("span");
      element.textContent = content;
      element.classList.add(...className);

      return element;
    }
  }
}
attachEvents();
