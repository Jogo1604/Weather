let lat;
let lon;

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    console.log(position.coords);
    lat = position.coords.latitude;
    lon = position.coords.longtitude;
  }

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95bd16a7252d408dc3c216d4e6bfbae3`)
            .then( (response) => {
              if (response.status >= 200 && response.status < 300) {
                  console.log("There is a problem!");
                }
      
              response.json().then( (data) => {
              console.log(data);
              })
          })       
            .catch((err) => {
          console.log("the following error occured");
        });   