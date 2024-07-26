import React from "react";
import "./WeeklyForecast.css";

const THE_WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeeklyForecast = ({ data }) => {
 const aWeek = new Date().getDay();
 const forecastDays = THE_WEEK_DAYS.slice(aWeek, THE_WEEK_DAYS.length).concat(THE_WEEK_DAYS.slice(0, aWeek)).slice(1, 6);

 const nextFiveDays = forecastDays.slice(0, 5);

 const celsiusToFahrenheit = (celsius) => {
   return (celsius * 9) / 5 + 32;
 };

 return (
   <>
     <h2 className="title"><b>Weekly Forecast</b></h2>
     <table className="theWeeklyTable">
       <thead>
         <tr>
           {nextFiveDays.map((day, idx) => (
             <th key={idx}>{day}</th>
           ))}
         </tr>
       </thead>
       <tbody>
         <tr>
           {data.list.slice(0, 5).map((item, idx) => (
             <td key={idx}>
               <div className="theWeeklyDetails">
                 <p className="theCurrentDay">{forecastDays[idx]}</p>
                 <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                 <p className="theTemperature">{Math.round(celsiusToFahrenheit(item.main.temp))}°F</p>
               </div>
             </td>
           ))}
         </tr>
       </tbody>
     </table>
   </>
 );
};

export default WeeklyForecast;


