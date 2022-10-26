import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { API_KEY } from "./config/config";
import Loading from "./components/Loading";
import ErrorViewer from "./components/ErrorViewer";
import Temperature from "./components/Temperature";

function App() {
  const [status, setStatus] = useState("LOADING");
  const [geo, setGeo] = useState(null);

  const fetchGeolocation = async (coords) => {
    setStatus("LOADING");
    try {
      let lat = coords.coords.latitude;
      let long = coords.coords.longitude;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${API_KEY}&units=metric`;
      console.log(API_URL);
      const result = await fetch(API_URL, coords);
      let resultJson = await result.json();
      setGeo(resultJson);
      setStatus("SUCCESS");
    } catch {
      setStatus("ERROR");
    }
  };

  const handleError = () => setStatus("ERROR");

  useEffect(() => {
    const currentLocation = () => {
      navigator.geolocation.getCurrentPosition(fetchGeolocation, handleError);
    };
    currentLocation();
  }, []);

  let country = geo.sys.country;
  let city = geo.name;
  let temp = `${Math.round(parseFloat(geo.main.temp))} \u{2103}`;

  return (
    <div className="App">
      {status === "LOADING" && <Loading />}
      {status === "ERROR" && <ErrorViewer />}
      {status === "SUCCESS" && (
        <Temperature country={country} city={city} temperature={temp} />
      )}
    </div>
  );
}

export default App;
