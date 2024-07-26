import React, { useState } from "react";
import Search from "./components/search/search";
import CurrentForecast from "./components/search/CurrentForecast/CurrentForecast";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";


function App() {
 const [currentWeather, setCurrentWeather] = useState(null);
 const [forecast, setForecast] = useState(null);
 const [hourlyForecast, setHourlyForecast] = useState(null);


 const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split(" ");


   const currentWeatherFetch = fetch(
     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
   );
   const forecastFetch = fetch(
     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
   );
   const hourlyForecastFetch = fetch(
     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
   );


   // const currentWeatherFetch = fetch(
   //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
   // );
  
   // const forecastFetch = fetch(
   //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
   // );
  
   // const hourlyForecastFetch = fetch(
   //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
   // );


   Promise.all([currentWeatherFetch, forecastFetch, hourlyForecastFetch])
     .then(async (response) => {
       const weatherResponse = await response[0].json();
       const forcastResponse = await response[1].json();
       const hourlyForecastResponse = await response[2].json();


       setCurrentWeather({ city: searchData.label, ...weatherResponse });
       setForecast({ city: searchData.label, ...forcastResponse });
       setHourlyForecast({ city: searchData.label, hourly: hourlyForecastResponse.list });
     })
     .catch(console.log);
 };


 return (
   <div className="container">
     <Search onSearchChange={handleOnSearchChange} />
     {currentWeather && <CurrentForecast data={currentWeather} />}
     {forecast && <WeeklyForecast data={forecast} />}
     {hourlyForecast && <HourlyForecast data={hourlyForecast} />}
   </div>
 );
}
export default App;



//For the console.log changes to show the API calls:

// export default App;

// function App() {
//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [hourlyForecast, setHourlyForecast] = useState(null);

//   const handleOnSearchChange = (searchData) => {
//     const [lat, lon] = searchData.value.split(" ");

//     const currentWeatherFetch = fetch(
//       `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     const forecastFetch = fetch(
//       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     const hourlyForecastFetch = fetch(
//       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );

//     // Log API URLs
//     console.log('Current Weather API URL:', `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
//     console.log('Forecast API URL:', `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
//     console.log('Hourly Forecast API URL:', `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

//     Promise.all([currentWeatherFetch, forecastFetch, hourlyForecastFetch])
//       .then(async (response) => {
//         const weatherResponse = await response[0].json();
//         const forecastResponse = await response[1].json();
//         const hourlyForecastResponse = await response[2].json();

//         // Log API responses
//         console.log('Current Weather API Response:', weatherResponse);
//         console.log('Forecast API Response:', forecastResponse);
//         console.log('Hourly Forecast API Response:', hourlyForecastResponse);

//         setCurrentWeather({ city: searchData.label, ...weatherResponse });
//         setForecast({ city: searchData.label, ...forecastResponse });
//         setHourlyForecast({ city: searchData.label, hourly: hourlyForecastResponse.list });
//       })
//       .catch((error) => {
//         console.error('API Error:', error);
//       });
//   };

//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {currentWeather && <CurrentForecast data={currentWeather} />}
//       {forecast && <WeeklyForecast data={forecast} />}
//       {hourlyForecast && <HourlyForecast data={hourlyForecast} />}
//     </div>
//   );
// }

// export default App;



