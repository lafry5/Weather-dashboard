var btn = document.querySelector('#search-button')
var searchV = document.querySelector('#search-value')
var name = document.querySelector('#name') 
var wind = document.querySelector('#wind') 
var humidity = document.querySelector('#humidity')
var temp = document.querySelector('#temp') 
var uv = document.querySelector('#uv')
var desc = document.querySelector('#desc')
var day = document.querySelector('#day')

var myCityArray = [];

day = moment().format('L');

//if (!myCityArray)  {
//   myCityArray = [];
//};

// Confirm document ready state
// When the page is ready, run our for loop.
//document.onreadystatechange = function () {
//    if(document.readyState === "complete"){
//      initApplication();
//    }
//}

//searchcities()

// Store cities
function storecity(city){
myCityArray.push(city)
console.log("city passed " + city)
for(i=0;i<myCityArray.length;i++){
   var currentcity = myCityArray[i];
   localStorage.setItem('citykey',myCityArray)
   var parentList = document.querySelector(".list-group")
  var myLi = document.createElement("li")
   myLi.textContent = currentcity
   
}
parentList.append(myLi)
console.log("Line 39 :- "+ currentcity);
}


btn.addEventListener('click', function() { 
    console.log(searchV.value)
    searchcities(searchV.value)
    storecity(searchV.value)


}) //end of addEventListener button */


function searchcities(city){
       let queryurl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8b58730b831d9dfe90f82c5fd73e1a99&units=imperial"
       var CityInfo = [];
       day = moment().format('L');
       var name = document.getElementById('name') //temp test
       var humidity = document.getElementById('humidity')
       var temp = document.getElementById('temp')
       var wind = document.getElementById('wind')
       var uv = document.getElementById('uv')
       var day = document.getElementById('day') 
       var desc = document.querySelector('#desc')
       var desc1 = document.querySelector('#desc1')
       var desc2 = document.querySelector('#desc2')
       var desc3 = document.querySelector('#desc3')
       var desc4 = document.querySelector('#desc4')
       var desc5 = document.querySelector('#desc5')
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
       
    //     Move this above after document ready
    //    myCityArray.push(city)
    //   for(i=0;i<myCityArray.length;i++){
    //    var currentcity = myCityArray[i];
    //    localStorage.setItem('citykey',myCityArray)
    //    var parentList = document.querySelector(".list-group")
    //    var myLi = document.createElement("li")
    //     myLi.textContent = currentcity
    //     parentList.append(myLi)
    //   }
    //   Move this above after document ready
       
       fetch(queryurl).then(function(response){
       return response.json()
       }).then(function(response){
       console.log(response) 
       
       //Get current city, date and description
       name.innerHTML = response.name 
       // need to add name to the cities list 
       console.log(response.name)
       day.innerHTML = moment().format('L');
       weather = response.weather[0].icon
       desc.src = "http://openweathermap.org/img/w/" + weather + ".png";
     
       // desc.innerHTML = response.weather.main
       //console.log(response.weather.main)

       //Get current temperature
       temp.innerHTML = "Temperature is " + response.main.temp + " F" 
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
    //  storecity(city)
     }
//} //end of searchcities function

//storecity(searchV.value)

// UV function & 5-day forecast using One Call API
var uvfunct = function(lat,lon) {
   var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=8b58730b831d9dfe90f82c5fd73e1a99&units=imperial"
   day = moment().format('L');
   fetch(apiUrl).then(function(result) {
        console.log(result)
        console.log('here')
        return result.json();
    }).then(function(result) {
        console.log(result)
        uv.innerHTML = "UV index is " + result.current.uvi;
        

        // Add colors for UV index
        //if ( result.current.uvi <= 3) {
        //    uv.addClass("low");
        //}
        //else if (result.current.uvi <= 8) {
        //    uv.addClass("medium");
        //}
        //else {
        //    uv.addClass("high");
        //}

        dayone = moment(). add(1,'days').format('L');
        daytwo = moment(). add(2,'days').format('L');
        daythree = moment(). add(3,'days').format('L');
        dayfour = moment(). add(4,'days').format('L');
        dayfive = moment(). add(5,'days').format('L');
        weather1 = result.daily[1].weather[0].icon
        weather2 = result.daily[2].weather[0].icon
        weather3 = result.daily[3].weather[0].icon
        weather4 = result.daily[4].weather[0].icon
        weather5 = result.daily[5].weather[0].icon
        desc1.src = "http://openweathermap.org/img/w/" + weather1 + ".png";
        desc2.src = "http://openweathermap.org/img/w/" + weather2 + ".png";
        desc3.src = "http://openweathermap.org/img/w/" + weather3 + ".png";
        desc4.src = "http://openweathermap.org/img/w/" + weather4 + ".png";
        desc5.src = "http://openweathermap.org/img/w/" + weather5 + ".png";     
        temp1.innerHTML = "Temp: " + result.daily[1].temp.max + " F"
        temp2.innerHTML = "Temp: " + result.daily[2].temp.max + " F"
        temp3.innerHTML = "Temp: " + result.daily[3].temp.max + " F"
        temp4.innerHTML = "Temp: " + result.daily[4].temp.max + " F"
        temp5.innerHTML = "Temp: " + result.daily[5].temp.max + " F"
        humidity1.innerHTML = "Humidity: " + result.daily[1].humidity + "%"
        humidity2.innerHTML = "Humidity: " + result.daily[2].humidity + "%"
        humidity3.innerHTML = "Humidity: " + result.daily[3].humidity + "%"
        humidity4.innerHTML = "Humidity: " + result.daily[4].humidity + "%"
        humidity5.innerHTML = "Humidity: " + result.daily[5].humidity + "%"
        day1.innerHTML = dayone;
        day2.innerHTML = daytwo;
        day3.innerHTML = daythree;
        day4.innerHTML = dayfour;
        day5.innerHTML = dayfive;
        


    })
   }




