async function getWeather() {
    const apiKey = 'f161085ff049b5f9b02c461876160766'; 
    const city = document.getElementById('cityInput').value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherResult = document.getElementById('weatherResult');

    if (city === '') {
        weatherResult.innerHTML = 'Please enter a city name.';
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `Error: ${error.message}`;
    }
}
