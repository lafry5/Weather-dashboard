var btn = document.querySelector('.btn-info')
var inputValue = document.querySelector('inputValue')
var name = document.querySelector('.name') //should this be getElementByClassName?
var desc = document.querySelector('.desc') //should this be getElementByClassName?
var temp = document.querySelector('.temp') //should this be getElementByClassName?



/* btn.addEventListener('click', function() { */

    function searchcities(city){
        let queryurl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=256323dc867f295cf0452b3157e363b5'
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=256323dc867f295cf0452b3157e363b5`,
            method: "GET",
            }).then(function (response){
            let cityName = response.cityName
            let temp = response.name.temp
            
            let humidity = response.name.humidity
            let windspeed = response.wind.speed
            console.log(response);
        })
        
    } //end of searchcities function

/* }) //end of addEventListener button */

searchcities('Seattle')

