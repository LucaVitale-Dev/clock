import React, { useState, useEffect } from "react";

function App() {
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

  return (
    <div className=" font-Electrolize bg-black h-screen w-screen flex justify-center items-center">
      <div className=" text-white flex justify-center flex-col items-center ">
        <h1 className=" text-3xl">{currentTimeDate.date}</h1>
        <h1 className=" text-9xl">{currentTimeDate.clock}</h1>
      </div>
    </div>
  );
}

export default App;
