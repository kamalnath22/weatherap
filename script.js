document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8e6aeac6395b3a4fc54a08de558a502a';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            document.getElementById('error').textContent = '';
        })
        .catch(error => {
            document.getElementById('error').textContent = error.message;
            document.getElementById('weatherResult').style.display = 'none';
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Conditions: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weatherResult').style.display = 'block';
}
function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    const icon = data.weather[0].icon;
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.innerHTML = `Temperature: ${data.main.temp} °C <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon">`;
    description.textContent = `Conditions: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weatherResult').style.display = 'block';
}

