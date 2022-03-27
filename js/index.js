var btn = document.querySelector('button')
var weatherEl = document.getElementById('searchweather')

btn.onclick = function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=jacksonville&appid=f2fc7aa133392d3242a22babdd19e61b&units=imperial')
    .then (function(weatherResponse) {
        return weatherResponse.json()
    })
    .then(function(weatherData) {
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
        })
        

        
    });
}