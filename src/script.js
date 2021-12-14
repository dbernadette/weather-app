function getCurrentDate(currentTime) {
  let currentDay = document.querySelector("#current-day");
  let currentDate = document.querySelector("#current-date");
  let currentMonth = document.querySelector("#current-month");
  let currentHour = document.querySelector("#current-hour");
  let currentMin = document.querySelector("#current-minutes");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  let day = days[currentTime.getDay()];
  let date = currentTime.getDate();
  let month = months[currentTime.getMonth()];
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();

  currentDay.innerHTML = day;

  if (date < 10) {
    currentDate.innerHTML = `0${date}`;
  } else {
    currentDate.innerHTML = date;
  }

  currentMonth.innerHTML = month;

  if (hour < 10) {
    currentHour.innerHTML = `0${hour}`;
  } else {
    currentHour.innerHTML = hour;
  }

  if (min < 10) {
    currentMin.innerHTML = `0${min}`;
  } else {
    currentMin.innerHTML = min;
  }
}

function formatForecastDay(dateTime) {
  let forecastdate = new Date(dateTime);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[forecastdate.getDay()];
  return day;
}

function formatForecastDate(dateTime) {
  let forecastdate = new Date(dateTime);
  let date = forecastdate.getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
}

function formatForecastMonth(dateTime) {
  let forecastdate = new Date(dateTime);
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[forecastdate.getMonth()];
  return month;
}

function formatRefreshTime(timeStamp) {
  let date = new Date(timeStamp);
  let hour = date.getHours();
  let min = date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${hour}:${min}`;
}

function displayWeatherIcon(iconNumber) {
  let currentIcon = document.querySelector("#icon-current");
  currentIcon.classList.remove(
    "fa-sun",
    "fa-moon",
    "fa-cloud-sun",
    "fa-cloud-moon",
    "fa-cloud",
    "fa-cloud-showers-heavy",
    "fa-cloud-sun-rain",
    "fa-cloud-moon-rain",
    "fa-bolt",
    "fa-snowflake",
    "fa-smog"
  );

  if (iconNumber === "01d") {
    currentIcon.classList.add("fa-sun");
  } else {
    if (iconNumber === "01n") {
      currentIcon.classList.add("fa-moon");
    } else {
      if (iconNumber === "02d") {
        currentIcon.classList.add("fa-cloud-sun");
      } else {
        if (iconNumber === "02n") {
          currentIcon.classList.add("fa-cloud-moon");
        } else {
          if (
            iconNumber === "03d" ||
            iconNumber === "03n" ||
            iconNumber === "04d" ||
            iconNumber === "04n"
          ) {
            currentIcon.classList.add("fa-cloud");
          } else {
            if (iconNumber === "09d" || iconNumber === "09n") {
              currentIcon.classList.add("fa-cloud-showers-heavy");
            } else {
              if (iconNumber === "10d") {
                currentIcon.classList.add("fa-cloud-sun-rain");
              } else {
                if (iconNumber === "10n") {
                  currentIcon.classList.add("fa-cloud-moon-rain");
                } else {
                  if (iconNumber === "11d" || iconNumber === "11n") {
                    currentIcon.classList.add("fa-bolt");
                  } else {
                    if (iconNumber === "13d" || iconNumber === "13n") {
                      currentIcon.classList.add("fa-snowflake");
                    } else {
                      if (iconNumber === "50d" || iconNumber === "50n") {
                        currentIcon.classList.add("fa-smog");
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function displayForecastIcon(iconNumber) {
  if (iconNumber === "01d") {
    return "fa-sun";
  } else {
    if (iconNumber === "01n") {
      return "fa-moon";
    } else {
      if (iconNumber === "02d") {
        return "fa-cloud-sun";
      } else {
        if (iconNumber === "02n") {
          return "fa-cloud-moon";
        } else {
          if (
            iconNumber === "03d" ||
            iconNumber === "03n" ||
            iconNumber === "04d" ||
            iconNumber === "04n"
          ) {
            return "fa-cloud";
          } else {
            if (iconNumber === "09d" || iconNumber === "09n") {
              return "fa-cloud-showers-heavy";
            } else {
              if (iconNumber === "10d") {
                return "fa-cloud-sun-rain";
              } else {
                if (iconNumber === "10n") {
                  return "fa-cloud-moon-rain";
                } else {
                  if (iconNumber === "11d" || iconNumber === "11n") {
                    return "fa-bolt";
                  } else {
                    if (iconNumber === "13d" || iconNumber === "13n") {
                      return "fa-snowflake";
                    } else {
                      if (iconNumber === "50d" || iconNumber === "50n") {
                        return "fa-smog";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.daily;

  let forecastHTML = `<div class="row align-items-center forecast">`;
  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 7) {
      forecastHTML += `<div class="col-sm pt-2">
              <div class="forecast-days">
                <div class="row align-items-center">
                  <div class="col-4 col-sm-12">
                    <div class="day-forecast">
                      <span id="forecast-day">${formatForecastDay(
                        forecastDay.dt * 1000
                      )}</span>
                      <div class="date-forecast">
                        <span id="forecast-date">${formatForecastDate(
                          forecastDay.dt * 1000
                        )}</span> /
                        <span id="forecast-month">${formatForecastMonth(
                          forecastDay.dt * 1000
                        )}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-sm-12">
                    <i class="fas ${displayForecastIcon(
                      forecastDay.weather[0].icon
                    )} icon-forecast" id="icon-forecast"></i>
                  </div>
                  <div class="col-4 col-sm-12">
                    <div class="temp-forecast">
                      <span id="temp-forecast-max">${Math.round(
                        forecastDay.temp.max
                      )} °</span> /
                      <span id="temp-forecast-min">${Math.round(
                        forecastDay.temp.min
                      )} °</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    }
  });
  forecastHTML += `</div>`;
  forecastElement.innerHTML = forecastHTML;

  forecastCelsiusTempMax = forecast.map((forecastDay) => forecastDay.temp.max);
  forecastCelsiusTempMin = forecast.map((forecastDay) => forecastDay.temp.min);
}

function callForecastApi(coord) {
  let apiKey = "a8d8c3705e34efea15d4ed8081bf1177";
  let latitude = coord.lat;
  let longitude = coord.lon;
  let unit = "metric";
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${apiKey}`;
  axios.get(forecastUrl).then(displayForecast);
}

function displayWeather(response) {
  let city = document.querySelector("h1");
  let country = document.querySelector("h2");
  let weatherDescription = document.querySelector("#weather");
  let currentTemperature = document.querySelector("#temp-current");
  let currentTemperatureMax = document.querySelector("#temp-current-max");
  let currentTemperatureMin = document.querySelector("#temp-current-min");
  let precipitation = document.querySelector("#precipitation-value");
  let humidity = document.querySelector("#humidity-value");
  let windSpeed = document.querySelector("#wind-value");

  let countryName = new Intl.DisplayNames(["en"], { type: "region" });
  let countryFullName = countryName.of(response.data.sys.country);

  celsiusTempCurrent = response.data.main.temp;
  celsiusTempMax = response.data.main.temp_max;
  celsiusTempMin = response.data.main.temp_min;
  NormalWindSpeed = response.data.wind.speed * 3.6;

  city.innerHTML = response.data.name;
  country.innerHTML = countryFullName;
  weatherDescription.innerHTML = response.data.weather[0].main;
  currentTemperature.innerHTML = Math.round(celsiusTempCurrent);
  currentTemperatureMax.innerHTML = `${Math.round(celsiusTempMax)} °C`;
  currentTemperatureMin.innerHTML = `${Math.round(celsiusTempMin)} °C`;
  precipitation.innerHTML = `${response.data.clouds.all} %`;
  humidity.innerHTML = `${response.data.main.humidity} %`;
  windSpeed.innerHTML = `${Math.round(NormalWindSpeed)} km/h`;

  displayWeatherIcon(response.data.weather[0].icon);

  let refreshTime = document.querySelector("#refresh-time");
  refreshTime.innerHTML = formatRefreshTime(response.data.dt * 1000);

  callForecastApi(response.data.coord);
}

function callWeatherApi(city) {
  let apiKey = "a8d8c3705e34efea15d4ed8081bf1177";
  let cityName = city;
  let unit = "metric";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`;
  axios.get(weatherUrl).then(displayWeather);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#floatingInput");
  searchInput.value = searchInput.value.trim().toLowerCase();
  if (searchInput.value) {
    callWeatherApi(searchInput.value);
  } else {
    alert(`Please type a city`);
  }
  searchInput.value = null;
}

function displayForecastCelsius() {
  for (let i = 1; i < 7; i++) {
    let forecastTempMaxElements =
      document.querySelectorAll("#temp-forecast-max")[i - 1];
    forecastTempMaxElements.innerHTML = `${Math.round(
      forecastCelsiusTempMax[i]
    )} °`;
    let forecastTempMinElements =
      document.querySelectorAll("#temp-forecast-min")[i - 1];
    forecastTempMinElements.innerHTML = `${Math.round(
      forecastCelsiusTempMin[i]
    )} °`;
  }
}

function convertTempCelsius(event) {
  event.preventDefault();
  event.target.style.color = "#fb3569";
  let otherButton = document.querySelector("#button-unit-fahrenheit");
  otherButton.style.color = "#783444";

  let currentTemperature = document.querySelector("#temp-current");
  let currentTemperatureMax = document.querySelector("#temp-current-max");
  let currentTemperatureMin = document.querySelector("#temp-current-min");
  let windSpeed = document.querySelector("#wind-value");

  currentTemperature.innerHTML = Math.round(celsiusTempCurrent);
  currentTemperatureMax.innerHTML = `${Math.round(celsiusTempMax)} °C`;
  currentTemperatureMin.innerHTML = `${Math.round(celsiusTempMin)} °C`;
  windSpeed.innerHTML = `${Math.round(NormalWindSpeed)} km/h`;

  displayForecastCelsius();
}

function displayForecastFahrenheit() {
  for (let i = 1; i < 7; i++) {
    let forecastFahrenheitTempMax = Math.round(
      (forecastCelsiusTempMax[i] * 9) / 5 + 32
    );
    let forecastFahrenheitTempMin = Math.round(
      (forecastCelsiusTempMin[i] * 9) / 5 + 32
    );
    let forecastTempMaxElements =
      document.querySelectorAll("#temp-forecast-max")[i - 1];
    forecastTempMaxElements.innerHTML = `${forecastFahrenheitTempMax} °`;
    let forecastTempMinElements =
      document.querySelectorAll("#temp-forecast-min")[i - 1];
    forecastTempMinElements.innerHTML = `${forecastFahrenheitTempMin} °`;
  }
}

function convertTempFahrenheit(event) {
  event.preventDefault();
  event.target.style.color = "#fb3569";
  let otherButton = document.querySelector("#button-unit-celsius");
  otherButton.style.color = "#783444";

  let currentTemperature = document.querySelector("#temp-current");
  let currentTemperatureMax = document.querySelector("#temp-current-max");
  let currentTemperatureMin = document.querySelector("#temp-current-min");
  let windSpeed = document.querySelector("#wind-value");

  let fahrenheitTempCurrent = (celsiusTempCurrent * 9) / 5 + 32;
  let fahrenheitTempMax = (celsiusTempMax * 9) / 5 + 32;
  let fahrenheitTempMin = (celsiusTempMin * 9) / 5 + 32;
  let WeirdWindSpeed = NormalWindSpeed / 1.609;

  currentTemperature.innerHTML = Math.round(fahrenheitTempCurrent);
  currentTemperatureMax.innerHTML = `${Math.round(fahrenheitTempMax)} °F`;
  currentTemperatureMin.innerHTML = `${Math.round(fahrenheitTempMin)} °F`;
  windSpeed.innerHTML = `${Math.round(WeirdWindSpeed)} mph`;

  displayForecastFahrenheit();
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "a8d8c3705e34efea15d4ed8081bf1177";
  let unit = "metric";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(weatherUrl).then(displayWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let celsiusTempCurrent = null;
let celsiusTempMax = null;
let celsiusTempMin = null;
let NormalWindSpeed = null;
let forecastCelsiusTempMax = null;
let forecastCelsiusTempMin = null;

getCurrentDate(new Date());

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let convertButtonCelsius = document.querySelector("#button-unit-celsius");
convertButtonCelsius.addEventListener("click", convertTempCelsius);

let convertButtonFahrenheit = document.querySelector("#button-unit-fahrenheit");
convertButtonFahrenheit.addEventListener("click", convertTempFahrenheit);

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", getPosition);

callWeatherApi("Budapest");
