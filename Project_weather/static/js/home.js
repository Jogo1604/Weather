let lat;
let lon;

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    console.log(position.coords);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
     
    //today fethc
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95bd16a7252d408dc3c216d4e6bfbae3`)
            .then( (response) => {
              if (response.status < 200 && response.status > 300) {
                  console.log("There is a problem!");
              }   
      
              response.json().then( (data) => {
              console.log(data);
              let today_icon_url = data.weather[0].icon;
              let today_icon = document.getElementById('today_icon');
              today_icon.src = `http://openweathermap.org/img/wn/${today_icon_url}.png`;
              document.getElementById('today_temp').innerHTML = (data.main.temp - 273.15).toFixed(0) + "°";
              document.getElementById('today_humidity').innerHTML = data.main.humidity+ "%";
              document.getElementById('today_rain').innerHTML = data.rain;
              document.getElementById('today_wspeed').innerHTML = data.wind.speed + "meter/sec";
              let today_clouds = document.getElementById('today_clouds');
              today_clouds.innerHTML = data.clouds.all+ "%";
              })
          })       
            .catch((err) => {
          console.log("the following error occured");
        }); 
        
        //3days fetch

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=95bd16a7252d408dc3c216d4e6bfbae3`)
        .then( (response) => {
          if (response.status < 200 && response.status > 300) {
              console.log("There is a problem!");
            }
  
          response.json().then( (data) => {
          console.log(data);
          })
      })       
        .catch((err) => {
      console.log("the following error occured");
    }); 
        
  }

