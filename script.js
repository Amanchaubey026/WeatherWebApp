const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "934a89914bmshb06642e532b5378p1d51e3jsn046abfdddf89",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const cityName = document.getElementById('cityName');


async function getWeather(city) {
    cityName.innerHTML= city
  try {
    const response = await fetch(url+city, options);
    const data = await response.json(); // Assuming the response contains JSON data
    // console.log(data)
    
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    temp2.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    humidity2.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_speed2.innerHTML = data.wind_speed;
    // wind_degrees.innerHTML = data.wind_degrees;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;
  } catch (error) {
    console.error(error);
  }
}

const submit = document.getElementById('submit');
submit.addEventListener("click",(e)=>{
    e.preventDefault(); 
    const cityInput = document.getElementById('city'); 
    getWeather(cityInput.value); 
})
getWeather("Delhi");

document.addEventListener('DOMContentLoaded', function() {
  async function populateWeatherData(cityClass, cityName) {
    try {
      const response = await fetch(url + cityName, options);
      const data = await response.json();

      // Debugging: Check if elements with class names exist
      const rows = document.querySelectorAll('.' + cityClass);
      if (rows.length === 0) {
        console.error(`No elements found with class '${cityClass}'`);
        return; // Exit the function if no elements were found
      }

      rows.forEach((row) => {
        const temp3 = row.querySelector('.temp3');
        const humidity3 = row.querySelector('.humidity3');
        const feels_like3 = row.querySelector('.feels_like3');
        const wind_speed3 = row.querySelector('.wind_speed3');
        const cloud_pct3 = row.querySelector('.cloud_pct3');
        const sunrise3 = row.querySelector('.sunrise3');
        const sunset3 = row.querySelector('.sunset3');
        const min_temp3 = row.querySelector('.min_temp3');
        const max_temp3 = row.querySelector('.max_temp3');

        // Debugging: Check if elements were successfully selected
        if (!temp3 || !humidity3 || !feels_like3 || !wind_speed3 || !cloud_pct3 ||
            !sunrise3 || !sunset3 || !min_temp3 || !max_temp3) {
          console.error(`One or more elements not found in row with class '${cityClass}'`);
          return; // Exit the function if one or more elements were not found
        }

        // Update the HTML elements in the specified row
        temp3.innerHTML = data.temp;
        humidity3.innerHTML = data.humidity;
        feels_like3.innerHTML = data.feels_like;
        wind_speed3.innerHTML = data.wind_speed;
        cloud_pct3.innerHTML = data.cloud_pct;
        sunrise3.innerHTML = data.sunrise;
        sunset3.innerHTML = data.sunset;
        min_temp3.innerHTML = data.min_temp;
        max_temp3.innerHTML = data.max_temp;
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Call the populateWeatherData function for each city
  populateWeatherData('banglore', 'Bangalore');
  populateWeatherData('Noida', 'Noida');
  populateWeatherData('Pune', 'Pune');
  populateWeatherData('Hydrabad', 'Hyderabad');
  populateWeatherData('Varanasi', 'Varanasi');
});
