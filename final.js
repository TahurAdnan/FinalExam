function searchWeather() {
    var apiKey = 'ba2e3b93670e8a6e4baa7fcea6e8377b';
    var city = document.getElementById('search-box').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            var cityElement = document.getElementById('city');
            var temperatureElement = document.getElementById('temperature');
            var descriptionElement = document.getElementById('description');
            var iconElement = document.getElementById('weather-icon');

            cityElement.innerText = data.name;
            temperatureElement.innerText = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
            descriptionElement.innerText = `Weather: ${data.weather[0].description}`;
            iconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error('Error fetching weather:', error));
}