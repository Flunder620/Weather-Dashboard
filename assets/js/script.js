var search = document.querySelector('.search-btn');
var userFormEl = document.querySelector('.user-form');
var searchedCitiesEl = document.querySelector('.searched-cities');

var apiKey = "29606f93b69cb8597014cd175be1c24d";
var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

function formSubmitHandler() {
    event.preventDefault()

};
// fetch(queryURL)
search.addEventListener('click', formSubmitHandler);