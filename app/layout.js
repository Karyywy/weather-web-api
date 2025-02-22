// // filepath: /c:/Users/User/Documents/projects/my-weather-app/app/layout.js
// "use client";

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Home from './page';

// export default function Layout() {
//   const baseUrl = "http://127.0.0.1:3000";
//   const [forecast, setForecast] = useState(null);
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await fetch(`${baseUrl}/api/weather`);
//         if (!result.ok) {
//           throw new Error(`Error: ${result.status} ${result.statusText}`);
//         }
//         const data = await result.json();
//         setForecast(data.forecast.forecastday[0]);
//         setLocation(data.location);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <html lang="en"> 
//     <body>
//     <div>
//       <Image
//         src="/weather-bg.jpg"
//         alt="Weather App Background Cover"
//         width={600}
//         height={900}
//         style={{ objectFit: "cover" }} // Updated for Next.js 13
//         className="z-[-1]"
//       />
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
//       <Home forecast={forecast} location={location} />
//     </div>
//     </body>
//     </html>
//   );
// }





import Image from 'next/image';
import React from 'react';

export default function WeatherAppLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}


