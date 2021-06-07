let lat;
let lon;

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    console.log(position.coords);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95bd16a7252d408dc3c216d4e6bfbae3`)
            .then( (response) => {
              if (response.status < 200 && response.status > 300) {
                  console.log("There is a problem!");
                }
      
              response.json().then( (data) => {
              console.log(data);
              let today_icon = document.getElementById('weather_icon');
              today_icon.innerHTML = data.weather.icon;
              let today_temp = document.getElementById('today_temp');
              today_temp.innerHTML = (data.main.temp - 273.15).toFixed(0) + "°";
              let today_humidity = document.getElementById('today_humidity');
              today_humidity.innerHTML = data.main.humidity;
              let today_rain = document.getElementById('today_rain');
              today_rain.innerHTML = data.rain;
              let today_wspeed = document.getElementById('today_wspeed');
              today_wspeed.innerHTML = data.wind.speed + "meter/sec";
              let today_clouds = document.getElementById('today_clouds');
              today_clouds.innerHTML = data.clouds.all+ "%";
              })
          })       
            .catch((err) => {
          console.log("the following error occured");
        });   
  }

