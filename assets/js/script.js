var search = document.querySelector(".search-btn");
var userFormEl = document.querySelector(".user-form");

var cityNameInputEl = document.querySelector("#city-name-input");

var cityNameEl = document.querySelector(".city-name");
var cityDateEl = document.querySelector(".city-date");
var cityConditionsEl = document.querySelector(".city-con");
var cityTempEl = document.querySelector(".city-temp");
var cityHumidEl = document.querySelector(".city-humid");
var cityWindEl = document.querySelector(".city-wind");

var forecastEl = document.querySelector(".forecast");

var cities = [];
var searchedCitiesEl = document.querySelector(".searched-cities");
var cityListEl = document.querySelector(".city-list");

// var apiKey = "29606f93b69cb8597014cd175be1c24d";
// var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

function getCityName(event) {
  // event.preventDefault();
  var cityNameInputEl = document.querySelector("#city-name-input").value;
  var apiKey = "29606f93b69cb8597014cd175be1c24d";
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityNameInputEl}&appid=${apiKey}&units=imperial`;

  fetch(queryURL).then(function (response) {
    console.log(response);
    if (response.ok) {
      response.json().then(function (data) {
        displayCity(data);
        displayFiveDay(data);
        init();
        var cityText = cityNameInputEl.value

        if (cityText === "") {
          return;
        }
      
        // Add new city to array and clear input
        cities.push(cityText);
        cityNameInputEl.value = "";
      
        // Store updated values
        storeCities();
        renderCities();
      });
    }
  });
}

//for city element
function displayCity(data) {
  console.log(data);
  cityNameEl.textContent = data.city.name;
  cityDateEl.textContent = data.list[0].dt_txt.split(" ")[0];
  cityConditionsEl.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
  );
  cityTempEl.textContent = "Temperature: " + data.list[0].main.temp + "°f";
  cityHumidEl.textContent = "Humidty: " + data.list[0].main.humidity + "% ";
  cityWindEl.textContent = "Wind Speed: " + data.list[0].wind.speed + " mph";
}
//five day forcast element
function displayFiveDay(data) {
  forecastEl.textContent = "";
  for (var i = 0; i < data.list.length; i = i + 8) {
    console.log(data.list[i]);
    var html = `           <div>
        <p class="forecast-date">${data.list[i].dt_txt.split(" ")[0]}</p>
        <img class="forecast-con" src="https://openweathermap.org/img/wn/${
          data.list[i].weather[0].icon
        }.png">
        <p class="forecast-temp">${
          "Temperature: " + data.list[i].main.temp + "°f"
        }</p>
        <p class="forecast-humid">${
          "Humidty: " + data.list[i].main.humidity + "% "
        }</p>
        <p class="forecast-wind">${
          "Wind Speed: " + data.list[i].wind.speed + " mph"
        }</p>
        </div>`;
    forecastEl.insertAdjacentHTML("beforeend", html);
  }
}
//render cities to li element
function renderCities() {
  cityListEl.textContent = "";
  for (var i = 0; i < cities.length; i++) {
    var city= cities[i];
    var li = document.createElement("li");
    li.textContent = city;
    cityListEl.appendChild(li)
  }
}

function init(){
    var storedCity = JSON.parse(localStorage.getItem("cities"));
    if (storedCity !== null) {
        cities = storedCity;
      }
}
//sotre citiy localStorage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
  }
// fetch(queryURL)
search.addEventListener("click", getCityName);
