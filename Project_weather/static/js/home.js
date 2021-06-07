window.onload = navigator.geolocation.getCurrentPosition(showPosition);

let lat;
let lon;

function showPosition(position) {
    return console.log(position.coords);
     let lat = position.coords.latitude;
    let lon = position.coords.longtitude;
  }

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95bd16a7252d408dc3c216d4e6bfbae3`)        
            .catch((err) => {
          console.log("the following error occured");
        });