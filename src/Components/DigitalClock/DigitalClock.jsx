import React, { useEffect } from "react";
import { useState } from "react";

export const DigitalClock = () => {
  const initialTime = new Date();
  const [time, setTime] = useState({
    hours: initialTime.getHours(),
    mins: initialTime.getMinutes(),
    secs: initialTime.getSeconds(),
  });
  useEffect(() => {
    setInterval(() => {
      let currentTime = new Date();
      setTime({
        hours: currentTime.getHours(),
        mins: currentTime.getMinutes(),
        secs: currentTime.getSeconds(),
      });
    }, 1000);
  }, []);
  return (
    <div>
      {time.hours}:{time.mins}:{time.secs}
    </div>
  );
};
