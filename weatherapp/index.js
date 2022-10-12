const DIV = document.createElement("div");
DIV.innerHTML = "";
document.body.appendChild(DIV);

let styles = `
    p {
      font-size: 24px;
    }
`;
let styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition, showError);
  } else {
    DIV.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getPosition(position) {
  const coordinates = position.coords;
  getWeather(coordinates);
}

async function getWeather(coordinates) {
  const API_KEY = "915f8241ad96d86447ba6fea055faf5e";
  let lat = coordinates.latitude;
  let long = coordinates.longitude;
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((datas) => showWeather(datas))
    .catch((error) => {
      throw error;
    });
}

function showWeather(datas) {
  const country = document.createElement("p");
  country.innerText = `
  Country: ${datas.sys.country}
  City: ${datas.name}
  Temp: ${Math.round(parseFloat(datas.main.temp))} \u{2103}`;
  DIV.appendChild(country);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      DIV.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      DIV.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      DIV.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      DIV.innerHTML = "An unknown error occurred.";
      break;
  }
}

getLocation();
