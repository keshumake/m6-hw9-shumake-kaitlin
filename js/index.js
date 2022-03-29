var btn = document.querySelector('button')
var weatherEl = document.getElementById('searchweather')
var formEl = document.querySelector('form')

formEl.onsubmit = function(e) {
  e.preventDefault()
  console.log(searchweather.value)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchweather.value}&appid=f2fc7aa133392d3242a22babdd19e61b&units=imperial`)
    .then (function(fetchedResponse) {
        return fetchedResponse.json()
    })
    .then(function(jsonResponse) {
        console.log(jsonResponse)
        var weatherDiv2 = document.getElementById('weather')
        weatherDiv2.appendChild(renderWeather(jsonResponse))
    })
    .catch(function(error) {
        console.log(error)
        var error = document.getElementById('searchweather')
        error.innerHTML = error.message
    })
}



function renderWeather(searchweather) {
            var weatherDiv = document.createElement('div')
            
            var location = document.createElement('h2')
            location.textContent = searchweather.name + ", " + searchweather.sys.country
            weatherDiv.appendChild(location)

            var pic = document.createElement('img')
            pic.src = searchweather.weather.icon
            weatherDiv.appendChild(pic)

            var weatherResult = document.createElement('h3')
            weatherResult.textContent = searchweather.weather.description
            weatherDiv.appendChild(weatherResult)

            var current = document.createElement('h3')
            current.textContent = "Current: " + Math.round(searchweather.main.temp) + " ° F"
            weatherDiv.appendChild(current)

            var feels = document.createElement('h3')
            feels.textContent = "Feels like: " + Math.round(searchweather.main.feels_like) + " ° F"
            weatherDiv.appendChild(feels)

            var updated = document.createElement('h3')
            var date = new Date()
            var timeOfDay = date.getHours() >= 12 ? 'pm' : 'am';
            var time = date.getHours() + ":" + date.getMinutes() + " " + timeOfDay
            updated.textContent = "Last updated: " + time
            weatherDiv.appendChild(updated)

            return weatherDiv

        }
    