'use client';

import { useEffect, useState } from "react";

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
      style={{
        width: "inherit", 
        height: "inherit",
        objectFit: "cover",
        position: "absolute",
        borderRadius: "inherit",
      }}
    >
      {/* Search Input */}
      <div>
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={searchCity} 
          onChange={(e) => setSearchCity(e.target.value)}  
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {/* Weather Data */}
      <h1 className="text-sm font-bold">My Location</h1>
      <span>{location?.name || "N/A"}</span>
      <h2>
        {forecastDays.length > 0 ? (
          forecastDays.map((day, index) => (

            return (
            <div key={index}>
              <div>{label} {day.date}</div>
              <div>H: {day.day.maxtemp_c}</div>
              <div>{day.day.avgtemp_c}</div>
              <div>L: {day.day.mintemp_c}</div>
            </div>
          );
        })
        ) : (
          <div>No forecast available</div>
        )}
      </h2>
    </div>
  );
}