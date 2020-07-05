var btn = document.querySelector('#search-button')
var searchV = document.querySelector('#search-value')
var name = document.querySelector('#name') 
var wind = document.querySelector('#wind') 
var humidity = document.querySelector('#humidity')
var temp = document.querySelector('#temp') 
var uv = document.querySelector('#uv')
var desc = document.querySelector('#desc')
var day = document.querySelector('#day')
var city = ''; 

day = moment().format('L');

var cities = {};

var loadCities = function () {
    cities = JSON.parse(loccalStorage.getItem("cities"));

    //if nothing in local Storage, create a new object to track all cities arrays

if (!cities)  {
    cities = [];
};
}


// var loadCities = function() {
//  cities = JSON.parse(localStorage.getItem("cities"));
//}

//var saveCities = function() { //stores to local storage (setItem, getItem)
//    console.log('executed save cities')
//    localStorage.setItem("cities", JSON.stringify(cities));
//};



btn.addEventListener('click', function() { 
    console.log(searchV.value)
    searchcities(searchV.value)
}) //end of addEventListener button */

function searchcities(city){
       let queryurl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8b58730b831d9dfe90f82c5fd73e1a99"
       var CityInfo = [];
       var name = document.getElementById('name') //temp test
       var humidity = document.getElementById('humidity')
       var temp = document.getElementById('temp')
       var wind = document.getElementById('wind')
       var uv = document.getElementById('uv')
       var day = document.getElementById('day') 
       var desc = document.querySelector('#desc')
       fetch(queryurl).then(function(response){
       return response.json()
       }).then(function(response){
       console.log(response) 
       
       //Get current city, date and description
       name.innerHTML = response.name 
       // need to add name to the cities list 
       console.log(response.name)
       day.innerHTML = moment().format('L');
       // desc.innerHTML = response.weather.main
       //console.log(response.weather.main)

       //Get current temperature
       temp.innerHTML = "Temperature is " + response.main.temp + "C" // Need to convert to F
       console.log(response.main.temp)
     
       //Humidity
       humidity.innerHTML = "Humidity is " + response.main.humidity + "%"
       console.log(response.main.humidity)
      

       //Wind 
       wind.innerHTML = "Wind speed is " + response.wind.speed + "MPH"
       console.log(response.wind.speed)
     
       return fetch (
        'https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=8b58730b831d9dfe90f82c5fd73e1a99'
       )
        console.log('in the return fetch')   
    }
       .then(function(response) {
           console.log('in the return fetch then response')
           return response.json();
           uv.innerHTML = "UV index is " + response.daily.uvi
       })
       .then(function(response) {
        uv.innerHTML = "UV index is " + response.daily.uvi
       )   
       }


       //UV variable
       //uvfunct(response.coord.lat, response.coord.lon)
      // uv.innerHTML = "UV index is " + response.daily.uvi
} //end of searchcities function

// UV function
//var uvfunct = function(lat,lon) {
//    var apiUrl = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+""
//   fetch(apiUrl)
//    .then(function(response){
//        return response.json();
//    }).then(function(response) {
//        console.log(response.value)
    //uv.innerHTML = "UV index is " + response[0].value;
//    })
//}