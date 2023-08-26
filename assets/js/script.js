var serach = document.querySelector('.user-form button')

var apiKey= "29606f93b69cb8597014cd175be1c24d";
var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

fetch(queryURL)