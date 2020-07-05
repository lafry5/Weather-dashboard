var btn = document.querySelector('#search-button')
var searchV = document.querySelector('#search-value')
var name = document.querySelector('#name') 
var wind = document.querySelector('#wind') 
var humidity = document.querySelector('#humidity')
var temp = document.querySelector('#temp') 
var uv = document.querySelector('#uv')
var desc = document.querySelector('#desc')
var day = document.querySelector('#day')

var cities = {}

day = moment().format('L');

var loadCities = function() {
    cities = JSON.parse(localStorage.getItem("cities"));
  }

if (!cities)  {
    cities = [];
};

//if nothing in local Storage, create a new object to track all cities arrays

// Need help below this...
var saveCities = function() { //stores to local storage 
   console.log('executed save cities')
   localStorage.setItem("cities", JSON.stringify(cities));
};






function getSearchVal() {
        var searchValue = document.querySelector("#search-value").value;
    searchcities(city);
    makelist(city);
}
      

function makeRow(searchValue) {
        var liEl = document.createElement("ul")
        ulEl.classList.add("list-group");
        var text = city;
        ulEl.textContent = text;
        var previousEl = document.querySelector('.previous');
        previousEl.onclick = function(){
          if (event.target.tagName == "UL"){
          searchcities(event.target.textContent)
          }
        }
        previousEl.appendChild(ulEl);
};    

//.. and above this

btn.addEventListener('click', function() { 
    console.log(searchV.value)
    searchcities(searchV.value)

}) //end of addEventListener button */


function searchcities(city){
       let queryurl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8b58730b831d9dfe90f82c5fd73e1a99"
       var CityInfo = [];
       day = moment().format('L');
       var name = document.getElementById('name') //temp test
       var humidity = document.getElementById('humidity')
       var temp = document.getElementById('temp')
       var wind = document.getElementById('wind')
       var uv = document.getElementById('uv')
       var day = document.getElementById('day') 
       var desc = document.querySelector('#desc')
       var day1 = document.getElementById('day1')
       var humidity1 = document.getElementById('humidity1')
       var temp1 = document.getElementById('temp1')
       var day2 = document.getElementById('day1')
       var humidity2 = document.getElementById('humidity2')
       var temp2 = document.getElementById('temp2')
       var day3 = document.getElementById('day3')
       var humidity3 = document.getElementById('humidity3')
       var temp3 = document.getElementById('temp3')
       var day4 = document.getElementById('day4')
       var humidity4 = document.getElementById('humidity4')
       var temp4 = document.getElementById('temp4')
       var day5 = document.getElementById('day5')
       var humidity5 = document.getElementById('humidity5')
       var temp5 = document.getElementById('temp5')
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
       temp.innerHTML = "Temperature is " + response.main.temp + " C" 
       console.log(response.main.temp)
       
       //Humidity
       humidity.innerHTML = "Humidity is " + response.main.humidity + "%"
       console.log(response.main.humidity)
      

       //Wind 
       wind.innerHTML = "Wind speed is " + response.wind.speed + " MPH"
       console.log(response.wind.speed)
     
        // UV variable
        uvfunct(response.coord.lat, response.coord.lon)

        //weather icon; need icon id
        // iconfunct(icon)
       })  .catch(function(err) {
            console.log('error')
     })
    }
//} //end of searchcities function



// UV function & forecast
var uvfunct = function(lat,lon) {
   var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=8b58730b831d9dfe90f82c5fd73e1a99"
   day = moment().format('L');
   fetch(apiUrl).then(function(result) {
        console.log(result)
        console.log('here')
        return result.json();
    }).then(function(result) {
        console.log(result)
        uv.innerHTML = "UV index is " + result.current.uvi;
        dayone = moment(). add(1,'days').format('L');
        daytwo = moment(). add(2,'days').format('L');
        daythree = moment(). add(3,'days').format('L');
        dayfour = moment(). add(4,'days').format('L');
        dayfive = moment(). add(5,'days').format('L');
        day1.innerHTML = dayone;
        day2.innerHTML = daytwo;
        day3.innerHTML = daythree;
        day4.innerHTML = dayfour;
        day5.innerHTML = dayfive;
        temp1.innerHTML = "Temp: " + result.daily[1].temp.day + " C"
        temp2.innerHTML = "Temp: " + result.daily[2].temp.day + " C"
        temp3.innerHTML = "Temp: " + result.daily[3].temp.day + " C"
        temp4.innerHTML = "Temp: " + result.daily[4].temp.day + " C"
        temp5.innerHTML = "Temp: " + result.daily[5].temp.day + " C"
        humidity1.innerHTML = "Humidity: " + result.daily[1].humidity + "%"
        humidity2.innerHTML = "Humidity: " + result.daily[2].humidity + "%"
        humidity3.innerHTML = "Humidity: " + result.daily[3].humidity + "%"
        humidity4.innerHTML = "Humidity: " + result.daily[4].humidity + "%"
        humidity5.innerHTML = "Humidity: " + result.daily[5].humidity + "%"
    })
   }
//} // runs without it ?!


// Weather icon function
//var iconfunct = function(icon) {
//   var apiUrl = "http://openweathermap.org/img/w/"+icon+".png";
//    fetch(apiUrl).then(function(ending) {
//         console.log(ending)
//         console.log('finally')
//         return result.json();
//     }).then(function(ending) {
//         //weather icon
//         console.log(ending.weather.icon)
//         $(".icon").html("<img src=' + .icon + '>") //Doesn't print an image
//         desc.innerHTML = ending.weather.icon;      //Doesn't print
//     })
//     }
// } // runs without it ?!

