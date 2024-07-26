import React from "react";
import "./CurrentForecast.css";

const CurrentForecast = ({ data }) => {
 const celsiusToFahrenheit = (celsius) => {
   return (celsius * 9) / 5 + 32;
 };

 return (
   <div className="weather">
     <div className="header">
       <div>
         <p className="city">{data.city}</p>
         <p className="weather-description">{data.weather[0].description}</p>
       </div>
     </div>
     <div className="iconAndTemperature">
       <img
         alt="weather"
         className="iconImage"
         src={`icons/${data.weather[0].icon}.png`}
       />
      
       <p className="temperature1">
         {Math.round(celsiusToFahrenheit(data.main.temp))}°F
       </p>
      
       <div className="Forecast-Details">
         <div className="theRow">
           <span className="parameter-label">Humidity:</span>
           <span className="parameter-value">{data.main.humidity}%</span>
         </div>
         <div className="theRow">
           <span className="parameter-label">Wind Speed:</span>
           <span className="parameter-value">{data.wind.speed} MPS</span>
         </div>
         <div className="theRow">
           <span className="parameter-label">Feels like:</span>
           <span className="parameter-value">
             {Math.round(celsiusToFahrenheit(data.main.feels_like))}°
           </span>
         </div>
       </div>
     </div>
   </div>
 );
};

export default CurrentForecast;
