import { response } from "express";
import Image from "next/image";

export default async function Home() {
  const result = await fetch("/api/weather");
  const data = await response
  const alerts = data ? data.alerts : [];

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
        <h1 className="text-sm font-bold">My Location</h1>
        <h2>
          {Array.isArray(alerts) ? (
            alerts.map((alert) => (
              <div key={alert.id}>
                {alert.event}
              </div>
            ))
          ) : (
            <div>No alerts available</div>
          )}
        </h2>
      </div>
    </div>
  );
}