btn.onclick = function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=jacksonville&appid=f2fc7aa133392d3242a22babdd19e61b&units=imperial')
    .then (function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res)
    })
}