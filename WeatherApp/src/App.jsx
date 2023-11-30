import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import cloudyImage from "./assets/cloud.jpg";
import sunnyImage from "./assets/sunny.png";
import rainyImage from "./assets/rain.png";
import snowImage from "./assets/snow.png";
import thunderImage from "./assets/thunder.jpg";
import clearImage from "./assets/clear.jpg";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(clearImage);

  const API_KEY = "abc7508587cfb3ee10779883008b8985";
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`;

  useEffect(() => {
    setBackgroundImage(clearImage);
  }, []);

  const searchLocation = () => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.error) {
          console.error("Cant find what you wanted", res.data.error);
        } else {
          setData(res.data);
          console.log(res.data);

          const weatherDescription =
            res.data.current.weather_descriptions[0].toLowerCase();
          console.log("Weather Description:", weatherDescription);

          if (weatherDescription.includes("cloudy")) {
            setBackgroundImage(cloudyImage);
          } else if (weatherDescription.includes("sunny")) {
            setBackgroundImage(sunnyImage);
          } else if (weatherDescription.includes("rainy")) {
            setBackgroundImage(rainyImage);
          } else if (weatherDescription.includes("snow")) {
            setBackgroundImage(snowImage);
          } else if (weatherDescription.includes("thunder")) {
            setBackgroundImage(thunderImage);
          } else if (weatherDescription.includes("clear")) {
            setBackgroundImage(clearImage);
          }
        }
      })
      .catch((error) => {
        console.error("Cannot fetch data:", error);
      });

    setLocation("");
  };

  return (
    <>
      <div
        className="page"
        style={{ background: `url(${backgroundImage}) no-repeat center center/cover` }}
      >
        <div className="search-box">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                searchLocation();
              }
            }}
            placeholder="Enter here"
          />
        </div>
        <div className="container">
          <div className="top-bar">
            <div className="location">
              <p>{data.location ? data.location.name : "Location Not Found"}</p>
            </div>
            <div className="temperature">
              <h1>{data.current ? data.current.temperature : "N/A"}°C</h1>
            </div>
            <div className="description">
              <p>
                {data.current ? data.current.weather_descriptions[0] : "N/A"}
              </p>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="feels-like">
              <p style={{ fontWeight: "1000" }}>
                {data.current ? data.current.feelslike : "N/A"}°C
              </p>
              <p>feels like</p>
            </div>
            <div className="humidity">
              <p style={{ fontWeight: "1000" }}>
                {data.current ? data.current.humidity : "N/A"}%
              </p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p style={{ fontWeight: "1000" }}>
                {data.current ? data.current.wind_speed : "N/A"}km/h
              </p>
              <p>wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
