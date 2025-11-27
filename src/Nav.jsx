import axios from "axios";
import React, { useState } from "react";
import "animate.css";

const Nav = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [country, setCountry] = useState(null);
  const [icon, setIcon] = useState(null);
  const [time,setTime] = useState(null);
  const [getError,setErro] = useState("");
  

  function getWeather() {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=63e3df273adda231e265c09c5d0a5e45`)
      .then((res) => {
        setWeather(res.data.weather[0].main);
        setTemp(res.data.main.temp);
        setDesc(res.data.weather[0].description);
        setCountry(res.data.sys.country);
        setIcon(res.data.weather[0].icon);
       

        const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
        const localtime = new Date(utc + res.data.timezone * 1000).toLocaleTimeString();
        setTime(localtime);
        console.log(Date.now());
        
      })

      .catch(()=>{
      
      setErro("Cities are not Found")
      console.log(getError);
      
      setWeather(null)
      setTemp(null)
      setDesc(null)
      setCity("")
      setCountry(null)
      setTime(null)
      })
      
  
  }

  return (
    <div
  className="d-flex justify-content-center align-items-center"
  style={{
    background: "linear-gradient(135deg, rgba(92, 213, 76, 1), #97df9aff)",
    minHeight: "100vh",
    padding: "12px"
  }}
>
  <div
    className="card shadow-lg border-0 rounded-4 w-100"
    style={{
      maxWidth: "380px",
      background: "#0d6848ff",
      color: "white",
      overflow: "hidden"
    }}
  >

        <div className="card-body text-center p-4">

        
          <h4 className="fw-bold mb-3" style={{ color: "#90caf9" }}>
            🌤 Live Weather Finder
          </h4>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control rounded-start-pill"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ border: "2px solid #90caf9" }}
            />
            <button
              className="btn rounded-end-pill fw-bold"
              onClick={getWeather}
              style={{ background: "#90caf9", color: "#1e2a38" }}
            >
              Search
            </button>
          </div>

        
          {weather && (
            <div className="mt-4 animate__animated animate__fadeIn">
              
          
              <img
                src={`https://flagsapi.com/${country}/flat/64.png`}
                alt="flag"
                className="mb-2"
              />

              {icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                  alt="weather icon"
                  className="mb-2"
                />
              )}
              <div>
  {time && (
  <div className="animate__animated animate__zoomIn">
    
    <div
      className="d-inline-block px-4 py-2 rounded-4"
      style={{
        background: "rgba(144,202,249,0.1)",
        border: "2px solid #90caf9",
        boxShadow: "0 0 25px #64b5f6, inset 0 0 10px #90caf9",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <h1
        className="fw-bold mb-0"
        style={{
          fontSize: "42px",
          textShadow: "0 0 15px #90caf9",
          letterSpacing: "3px",
          color: "#e3f2fd"
        }}
      >
        {time}
      </h1>

      <small style={{ color: "#90caf9", fontSize: "14px", letterSpacing: "2px" }}>
        LOCAL TIME ⏱
      </small>
    </div>
    <div className="mt-3">
      <button
        onClick={() => setTime(new Date().toLocaleTimeString())}
        className="btn rounded-pill fw-bold animate__animated animate__pulse animate__infinite"
        style={{
          background: "#90caf9",
          color: "#1e2a38",
          boxShadow: "0 0 12px #90caf9"
        }}
      >
        ⟳ Refresh Time
      </button>
    </div>

  </div>
)}

              </div>
              <h5 className="fw-bold text-uppercase" style={{ color: "#64b5f6" }}>
                {weather}
              </h5>

              <h2 className="fw-bold">{temp}°C</h2>


              

              <p className="text-capitalize text-muted">{desc}</p>
            
              <div
                className="p-2 mt-3 rounded-pill"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid #64b5f6" }}
              >
                <small>Location: {city}, {country}</small>
              </div>
              

            </div>
          )}  
          
         {getError && (
             <div className="alert alert-danger animate__animated animate__shakeX">
            {getError}
           </div>
            )} 
                        
        </div>
      
        <div
          className="card-footer text-center border-0 rounded-bottom-4"
          style={{ background: "#052419ff", color: "#90caf9" }}
        >
          <small>Designed  by Venkatesh 🌍</small>
        </div>
      </div>
    </div>
  );
};

export default Nav;
