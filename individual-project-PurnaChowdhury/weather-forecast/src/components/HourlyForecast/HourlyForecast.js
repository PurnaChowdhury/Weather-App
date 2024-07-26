import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ data }) => {
 const hourlyForecast = data.hourly;

 const nextHoursForecast = hourlyForecast.slice(0, 5);

 const celsiusToFahrenheit = (celsius) => {
   return (celsius * 9) / 5 + 32;
 };

 return (
   <div className="hourly-forecast">
     <h2 className="title6">3-Hourly Forecast</h2>
     <div className="hourly-items">
       {nextHoursForecast.map((hour, idx) => (
         <div key={idx} className="hourly-item">
           <p className="hour">{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
           <img src={`icons/${hour.weather[0].icon}.png`} className="icon-small1" alt="weather" />
           <p className="temperature2">{Math.round(celsiusToFahrenheit(hour.main.temp))}°F</p>
         </div>
       ))}
     </div>
   </div>
 );
};

export default HourlyForecast;
