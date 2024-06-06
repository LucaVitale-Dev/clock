import React, { useState, useEffect } from "react";
import { GiPositionMarker } from "react-icons/gi";

function App() {
  const [userLocation, setUserLocation] = useState("");

  const [currentTimeDate, setCurrentTimeDate] = useState({
    clock: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  });

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTimeDate({
        clock: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  ///
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
          .then((response) => response.json())
          .then((data) => {
            setUserLocation(`${data.city}, ${data.state}, ${data.country}`);
          });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  return (
    <div className=" overflow-hidden box-border font-Electrolize bg-black h-screen w-screen flex justify-center items-center">
      <div className=" text-white flex justify-center flex-col items-center ">
        <h1 className=" text-3xl md:text-3xl">{currentTimeDate.date}</h1>
        <h1 className=" text-7xl md:text-9xl">{currentTimeDate.clock}</h1>

        {userLocation && (
          <p className=" flex items-center gap-2">
            <GiPositionMarker />
            {userLocation}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
