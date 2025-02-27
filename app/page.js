// 'use client';

// import { useEffect, useState } from "react";
// import Image from 'next/image'; // ✅ Imported Image from 'next/image'
// import 'tailwindcss/tailwind.css';


// export default function Home() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);
//   const [searchCity, setSearchCity] = useState(""); // ✅ Fixed typo
//   const [loading, setLoading] = useState(false);

//   const fetchWeather = async (city) => {
//     if (!city.trim()) {
//       alert("Please enter a city name.");
//       return; // ✅ Properly placed return
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`);
//       if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);

//       const data = await res.json();
//       setWeatherData(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchWeather("Toronto");
//   }, []);

//   const handleSearch = () => {
//     fetchWeather(searchCity); // ✅ Now `searchCity` is correctly referenced
//   };

//   if (error) return <div>Error: {error}</div>;
//   if (loading) return <div>Loading...</div>;

//   const location = weatherData?.location || {};
//   const forecastDays = weatherData?.forecast?.forecastday || [];

//   return (
//     <div
//       style={{
//       fontFamily: "monospace",
//       backgroundImage: "url('/weather-app-bg.jpg')",
//       backgroundAttachment: "fixed",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       height: "100vh",
//       padding: "2rem"
//     }}
//   >
//       {/* Search Input */}
//       <div>
//         <input 
//           type="text" 
//           placeholder=" Enter city name" 
//           value={searchCity} 
//           onChange={(e) => setSearchCity(e.target.value)}  
//           className="w-80 h-7"
//         />
//         <button className="top-auto bottom-auto" onClick={handleSearch}>
//           <Image src="/search-btn.png" alt="search-btn" width="28" height="28"/>
//         </button>
//       </div>
      
//       {/* Weather Data */}
//       <h1 className="text-2xl font-bold">My Location</h1>
//       <header className="text-lg font-bold">{location?.name || "N/A"}</header>
      
//       <h2>
//         {forecastDays.length > 0 ? (
//           forecastDays.map((day, index) => {
//             const label = index === 0 ? "Today" : index === 1 ? "Tomorrow" : "After tomorrow";

//             return (
//               <div key={index}>
//                 <div>{label}: {day.date}</div>
//                 <div>H: {day.day.maxtemp_c}°C</div>
//                 <div>{day.day.avgtemp_c}°C</div>
//                 <div>L: {day.day.mintemp_c}°C</div>
//               </div>
//             );
//           })
//         ) : (
//           <div>No forecast available</div>
//         )}
//       </h2>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from "react";
import Image from 'next/image'; // ✅ Imported Image from 'next/image'
import 'tailwindcss/tailwind.css';


export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState(""); // ✅ Fixed typo
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return; // ✅ Properly placed return
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`);
      if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Toronto");
  }, []);

  const handleSearch = () => {
    fetchWeather(searchCity); // ✅ Now `searchCity` is correctly referenced
  };

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  const location = weatherData?.location || {};
  const forecastDays = weatherData?.forecast?.forecastday || [];

  return (
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{
      fontFamily: "monospace",
      backgroundImage: "url('/weather-app-bg.jpg')",
    }}
  >
      
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white w-[380px]">
        {/* Search Bar */}
        <div className="flex items-center bg-white/30 rounded-lg p-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white p-2"
          />
          <button onClick={handleSearch} className="ml-2">
            <Image src="/search-btn.png" alt="Search" width={24} height={24} />
          </button>
        </div>

        {/* Location and Temperature */}
        <h1 className="text-2xl font-bold">{location?.name || "N/A"}</h1>
        <h2 className="text-lg">{weatherData?.current?.condition?.text || "N/A"}</h2>
        {weatherData?.current?.condition?.icon && (
          <Image 
            src={`https:${weatherData?.current?.condition?.icon}`} 
            alt="Icon" 
            width={50} 
            height={50} 
          />
        )}
        <div className="text-5xl font-bold">{weatherData?.current?.temp_c || "0"}°C</div>

        {/* Weather Forecast */}
        <div className="mt-4 flex justify-between text-sm">
          {forecastDays.length > 0 ? (
            forecastDays.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs">{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</div>
                <div>{day.day.maxtemp_c}° / {day.day.mintemp_c}°</div>
              </div>
            ))
          ) : (
            <div className="text-center">No forecast available</div>
          )}
        </div>
      </div>
    </div>
  );
}

