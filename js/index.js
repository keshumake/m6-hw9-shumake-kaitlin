var btn = document.querySelector('button')
var weatherEl = document.getElementById('searchweather')
var formEl = document.querySelector('form')

formEl.onsubmit = function(e) {
  e.preventDefault()
  console.log(searchweather.value)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchweather.value}&appid=f2fc7aa133392d3242a22babdd19e61b`)
    .then (function(weatherResponse) {
        return weatherResponse.json()
    })
    .then(function(data) {
        console.log(data)
        weatherResponse.value = ""
    })
    .catch(function(error) {
        console.log(error)
        weatherResponse.innerHTML = "Please enter another location."
    })
}



function renderUsers(searchweather) {
        weatherEl.innerHTML= ""
        weatherData.results.forEach(function(searchweather) {
            var weatherDiv = document.createElement('div')
            
            var location = document.createElement('h3')
            location.textContent = searchweather.name + ", " + searchweather.sys.country
            weatherDiv.appendChild(location)

            var weatherResult = document.createElement('h3')
            weatherResult.textContent = searchweather.weather.description
            weatherDiv.appendChild(weatherResult)

            var current = document.createElement('h3')
            current.textContent = "Current: " + searchweather.main.temp
            weatherDiv.appendChild(current)

            var feels = document.createElement('h3')
            feels.textContent = "Feels like: " + searchweather.main.feels_like
            weatherDiv.appendChild(feels)

            var updated = document.createElement('h3')
            var date = dateNow()
            updated.textContent = "Last updated: " + date
            weatherDiv.appendChild(updated)


            weatherEl.appendChild(weatherDiv)
        });
        
}