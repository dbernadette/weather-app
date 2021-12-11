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

function getForecastDate(currentTime) {
  let forecastDayOne = document.querySelector("#day-one");
  let forecastDateOne = document.querySelector("#date-one");
  let forecastMonthOne = document.querySelector("#month-one");
  let forecastDayTwo = document.querySelector("#day-two");
  let forecastDateTwo = document.querySelector("#date-two");
  let forecastMonthTwo = document.querySelector("#month-two");
  let forecastDayThree = document.querySelector("#day-three");
  let forecastDateThree = document.querySelector("#date-three");
  let forecastMonthThree = document.querySelector("#month-three");
  let forecastDayFour = document.querySelector("#day-four");
  let forecastDateFour = document.querySelector("#date-four");
  let forecastMonthFour = document.querySelector("#month-four");
  let forecastDayFive = document.querySelector("#day-five");
  let forecastDateFive = document.querySelector("#date-five");
  let forecastMonthFive = document.querySelector("#month-five");

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  currentTime.setDate(currentTime.getDate() + 1);
  let dayOne = days[currentTime.getDay()];
  let dateOne = currentTime.getDate();
  let monthOne = months[currentTime.getMonth()];

  currentTime.setDate(currentTime.getDate() + 1);
  let dayTwo = days[currentTime.getDay()];
  let dateTwo = currentTime.getDate();
  let monthTwo = months[currentTime.getMonth()];

  currentTime.setDate(currentTime.getDate() + 1);
  let dayThree = days[currentTime.getDay()];
  let dateThree = currentTime.getDate();
  let monthThree = months[currentTime.getMonth()];

  currentTime.setDate(currentTime.getDate() + 1);
  let dayFour = days[currentTime.getDay()];
  let dateFour = currentTime.getDate();
  let monthFour = months[currentTime.getMonth()];

  currentTime.setDate(currentTime.getDate() + 1);
  let dayFive = days[currentTime.getDay()];
  let dateFive = currentTime.getDate();
  let monthFive = months[currentTime.getMonth()];

  forecastDayOne.innerHTML = dayOne;
  if (dateOne < 10) {
    forecastDateOne.innerHTML = `0${dateOne}`;
  } else {
    forecastDateOne.innerHTML = dateOne;
  }
  forecastMonthOne.innerHTML = monthOne;

  forecastDayTwo.innerHTML = dayTwo;
  if (dateTwo < 10) {
    forecastDateTwo.innerHTML = `0${dateTwo}`;
  } else {
    forecastDateTwo.innerHTML = dateTwo;
  }
  forecastMonthTwo.innerHTML = monthTwo;

  forecastDayThree.innerHTML = dayThree;
  if (dateThree < 10) {
    forecastDateThree.innerHTML = `0${dateThree}`;
  } else {
    forecastDateThree.innerHTML = dateThree;
  }
  forecastMonthThree.innerHTML = monthThree;

  forecastDayFour.innerHTML = dayFour;
  if (dateFour < 10) {
    forecastDateFour.innerHTML = `0${dateFour}`;
  } else {
    forecastDateFour.innerHTML = dateFour;
  }
  forecastMonthFour.innerHTML = monthFour;

  forecastDayFive.innerHTML = dayFive;
  if (dateFive < 10) {
    forecastDateFive.innerHTML = `0${dateFive}`;
  } else {
    forecastDateFive.innerHTML = dateFive;
  }
  forecastMonthFive.innerHTML = monthFive;
}

function displayForecast(response) {
  let TempMaxOne = document.querySelector("#temp-max-one");
  let TempMinOne = document.querySelector("#temp-min-one");
  let TempMaxTwo = document.querySelector("#temp-max-two");
  let TempMinTwo = document.querySelector("#temp-min-two");
  let TempMaxThree = document.querySelector("#temp-max-three");
  let TempMinThree = document.querySelector("#temp-min-three");
  let TempMaxFour = document.querySelector("#temp-max-four");
  let TempMinFour = document.querySelector("#temp-min-four");
  let TempMaxFive = document.querySelector("#temp-max-five");
  let TempMinFive = document.querySelector("#temp-min-five");

  TempMaxOne.innerHTML = `${Math.round(response.data.daily[1].temp.max)} °C`;
  TempMinOne.innerHTML = `${Math.round(response.data.daily[1].temp.min)} °C`;
  TempMaxTwo.innerHTML = `${Math.round(response.data.daily[2].temp.max)} °C`;
  TempMinTwo.innerHTML = `${Math.round(response.data.daily[2].temp.min)} °C`;
  TempMaxThree.innerHTML = `${Math.round(response.data.daily[3].temp.max)} °C`;
  TempMinThree.innerHTML = `${Math.round(response.data.daily[3].temp.min)} °C`;
  TempMaxFour.innerHTML = `${Math.round(response.data.daily[4].temp.max)} °C`;
  TempMinFour.innerHTML = `${Math.round(response.data.daily[4].temp.min)} °C`;
  TempMaxFive.innerHTML = `${Math.round(response.data.daily[5].temp.max)} °C`;
  TempMinFive.innerHTML = `${Math.round(response.data.daily[5].temp.min)} °C`;
}

function displayWeatherIcon(iconNumber) {
  let currentIcon = document.querySelector("#icon-current");
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
  displayWeatherIcon(response.data.weather[0].icon);

  let apiKey = "a8d8c3705e34efea15d4ed8081bf1177";
  let latitude = response.data.coord.lat;
  let longitude = response.data.coord.lon;
  let unit = "metric";
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${apiKey}`;
  axios.get(forecastUrl).then(displayForecast);
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

getCurrentDate(new Date());

getForecastDate(new Date());

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let convertButtonCelsius = document.querySelector("#button-unit-celsius");
convertButtonCelsius.addEventListener("click", convertTempCelsius);

let convertButtonFahrenheit = document.querySelector("#button-unit-fahrenheit");
convertButtonFahrenheit.addEventListener("click", convertTempFahrenheit);

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", getPosition);

callWeatherApi("Budapest");
