// script.js
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API Key
const getWeatherButton = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");

getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city !== "") {
        fetchWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById("cityName").innerText = `Weather in ${data.name}`;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("weatherCondition").innerText = `Condition: ${data.weather[0].description}`;
}
