// // filepath: /c:/Users/User/Documents/projects/my-weather-app/app/page.js
// export default function Home({ forecast, location }) {
//   return (
//     <div
//       style={{
//         width: "inherit",
//         height: "inherit",
//         objectFit: "cover",
//         position: "absolute",
//         borderRadius: "inherit",
//       }}
//     >
//       <div
//         style={{
//           color: "white",
//           width: "inherit",
//           height: "inherit",
//           position: "relative",
//           borderRadius: "inherit",
//           background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 14.06%, #1E1E1E 100%)",
//           display: "flex",
//           alignItems: "flex-end",
//           textAlign: "center",
//           zIndex: 1, // Ensure this is above the image
//         }}
//       >
//         <h1 className="text-sm font-bold">My Location {location?.name}</h1>
//         <h2>
//           {forecast ? (
//             <div>
//               <div>Date: {forecast.date}</div>
//               <div>Max Temp (C): {forecast.day.maxtemp_c}</div>
//               <div>Avg Temp (C): {forecast.day.avgtemp_c}</div>
//               <div>Min Temp (C): {forecast.day.mintemp_c}</div>
//             </div>
//           ) : (
//             <div>No forecast available</div>
//           )}
//         </h2>
//       </div>
//     </div>
//   );
// }
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    async function fetchWeather() {
      try{
        const res = await fetch('/api/weather');
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  }
  fetchWeather();
}, []);

  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Loading...</div>;

// export default async function Home() {
//   const baseUrl = "http://127.0.0.1:3000";
//   let forecast = null;
//   let location = null;

//   try {
//     const result = await fetch(`${baseUrl}/api/weather`);
//     if (!result.ok) {
//       throw new Error(`Error: ${result.status} ${result.statusText}`);
//     }
//     const data = await result.json();
//     forecast = data.forecast.forecastday[0];
//     location = data.location;
//     // ... use alerts as needed ...
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     // Handle the error appropriately in your UI
//   }

  return (
    <div
      style={{
        width: "inherit",
        height: "inherit",
        objectFit: "cover",
        position: "absolute",
        borderRadius: "inherit",
      }}
    >
      <Image
        src="/weather-bg.jpg"
        alt="Weather App Background Cover"
        width={600}
        height={900}
        objectFit="cover"
        className="z-[-1]"
      />
      <div
        style={{
          color: "white",
          width: "inherit",
          height: "inherit",
          position: "relative",
          borderRadius: "inherit",
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 14.06%, #1E1E1E 100%)",
          display: "flex",
          alignItems: "flex-end",
          textAlign: "center",
          zIndex: 1, // Ensure this is above the image
        }}
      >
        <h1 className="text-sm font-bold">My Location {location.name}</h1>
        <h2>
          {forecast ? (
            <div>
              <div>Date: {forecast.date}</div>
              <div>Max Temp (C): {forecast.day.maxtemp_c}</div>
              <div>Avg Temp (C): {forecast.day.avgtemp_c}</div>
              <div>Min Temp (C): {forecast.day.mintemp_c}</div>
            </div>
          ) : (
            <div>No forecast available</div>
          )}
        </h2>
      </div>
    </div>
  );
}