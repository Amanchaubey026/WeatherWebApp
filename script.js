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
    console.log(data)
    
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