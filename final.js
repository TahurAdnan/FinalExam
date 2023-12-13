function searchWeather() {
    console.log("Clicked")
    var apiKey = 'ba2e3b93670e8a6e4baa7fcea6e8377b';
    const city = document.getElementById('search-box').value;
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
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