let lat;
let lon;

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let n = d.getDay()

    //location
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
              document.getElementById('today_day').innerHTML = days[n];
              document.getElementById('today_icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
              document.getElementById('today_temp').innerHTML = (data.main.temp - 273.15).toFixed(0) + "°";
              document.getElementById('today_feels_like').innerHTML = (data.main.feels_like - 273.15).toFixed(0) + "°";
              document.getElementById('today_humidity').innerHTML = data.main.humidity+ "%";
              if(data.rain){
                document.getElementById('today_rain').innerHTML = data.rain[0] + " l/m²";
              } else {
                document.getElementById('today_rain').innerHTML = "0%";
              }
              document.getElementById('today_wspeed').innerHTML = data.wind.speed + " meter/sec";
              document.getElementById('today_clouds').innerHTML = data.clouds.all+ "%";
              })
          })       
            .catch((err) => {
          console.log("the following error occured");
        }); 
        
        //Many days fetch

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=95bd16a7252d408dc3c216d4e6bfbae3`)
        .then( (response) => {
          if (response.status < 200 && response.status > 300) {
              console.log("There is a problem!");
            }
  
          response.json().then( (data) => {
          console.log(data);
             for(let i=0 ;i < 3 ;i++)
             {             
              if(n+i<7){document.getElementById('3days_day'+i).innerHTML = days[n+i];
              }else document.getElementById('3days_day'+i).innerHTML = days[n-7+i];             
              document.getElementById('3days_icon'+i).src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`;
              document.getElementById('3days_temp'+i).innerHTML =(data.daily[i].temp.day - 273.15).toFixed(0) + "°";
              document.getElementById('3days_feels_like'+i).innerHTML =(data.daily[i].feels_like.day - 273.15).toFixed(0) + "°";
              document.getElementById('3days_humidity'+i).innerHTML = data.daily[i].humidity+ "%";
              if(data.daily[i].rain){
                document.getElementById('3days_rain'+i).innerHTML = data.daily[i].rain + " l/m²";
              } else {
                document.getElementById('3days_rain'+i).innerHTML = "0%";
              }
              document.getElementById('3days_windSpeed'+i).innerHTML = data.daily[i].wind_speed + " meter/sec";
              document.getElementById('3days_clouds'+i).innerHTML = data.daily[i].clouds+ "%";
             }
             for(let i=0 ;i < 7 ;i++)
             {
              if(n+i<7){document.getElementById('7days_day'+i).innerHTML = days[n+i];
              }else document.getElementById('7days_day'+i).innerHTML = days[n-7+i];
              document.getElementById('7days_icon'+i).src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`;
              document.getElementById('7days_temp'+i).innerHTML =(data.daily[i].temp.day - 273.15).toFixed(0) + "°";
              document.getElementById('7days_feels_like'+i).innerHTML =(data.daily[i].feels_like.day - 273.15).toFixed(0) + "°";
              document.getElementById('7days_humidity'+i).innerHTML = data.daily[i].humidity+ "%";
              if(data.daily[i].rain){
                document.getElementById('7days_rain'+i).innerHTML = data.daily[i].rain + " l/m²";
              } else {
                document.getElementById('7days_rain'+i).innerHTML = "0%";
              }
              document.getElementById('7days_wSpeed'+i).innerHTML = data.daily[i].wind_speed + " meter/sec";
              document.getElementById('7days_clouds'+i).innerHTML = data.daily[i].clouds+ "%";
             }
          })
      })       
        .catch((err) => {
      console.log("the following error occured");
    }); 
        
  }