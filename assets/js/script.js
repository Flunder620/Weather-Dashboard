var search = document.querySelector('.search-btn');
var userFormEl = document.querySelector('.user-form');
var cityNameEl = document.querySelector('.city-name');
var cityDateEl = document.querySelector('.city-date');
var cityConditionsEl = document.querySelector('.city-con');
var cityTempEl = document.querySelector('.city-temp');
var cityHumidEl = document.querySelector('.city-humid');
var cityWindEl= document.querySelector('.city-wind');

var searchedCitiesEl = document.querySelector('.searched-cities');

// var apiKey = "29606f93b69cb8597014cd175be1c24d";
// var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

function getCityName() {
    event.preventDefault();
    var apiKey = "29606f93b69cb8597014cd175be1c24d";
    var queryURL = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    var city = cityNameEl.value.trim()
    fetch(queryURL)
    .then(function(response){
        if(response.ok){
            response.json().then(function (data) {
                displayCity(data,user)
            })
        }
    })
    
};

function displayCity() {

}
// fetch(queryURL)
search.addEventListener('click', formSubmitHandler);