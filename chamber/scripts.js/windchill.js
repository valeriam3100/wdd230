const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#conditions');
const windSpeed = document.querySelector('#wind-speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=75028&units=imperial&lang=en&appid=c84d2a464c67348bbb1e442a71fe1a58';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }

  }

  apiFetch();





  function displayResults(weatherData) {
    currentTemp.innerHTML = `<h2><strong>${weatherData.main.temp.toFixed(0)}&deg F</strong></h2>`
    windSpeed.innerHTML = `Wind Speed: <strong>${weatherData.wind.speed.toFixed(0)} m/h</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;



    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    //windchill calculation
    
    t = parseInt(weatherData.main.temp.toFixed(0));
    s = weatherData.wind.speed.toFixed(0);
    windchill = (35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
    if (t <= 50 && s >= 3) {
        windchill = Math.round(windchill);
    } else {
        windchill = `N/A`;
    }

    chill = document.querySelector(".chill");
    chill.textContent = `Windchill: ${windchill}`;

  }