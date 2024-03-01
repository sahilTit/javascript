import "./../../styles/Clock.css";
import { useState, useEffect } from "react";

function Clock() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countdown = () => {
    const destination = new Date("Mar 05,2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countdown();
  });

  return (
    <div className="div1">
      <div className="clock-data">
        <div>
          <h1>{days} </h1>
          <h5>Days</h5>
        </div>
        <div className="clock-time">
          <span>:</span>
        </div>
      </div>
      <div className="clock-data">
        <div>
          <h1>{hours} </h1>
          <h5>Hours</h5>
        </div>
        <div className="clock-time">
          <span>:</span>
        </div>
      </div>
      <div className="clock-data">
        <div>
          <h1>{minutes} </h1>
          <h5>Minutes</h5>
        </div>
        <div className="clock-time">
          <span>:</span>
        </div>
      </div>
      <div className="clock-data">
        <div>
          <h1>{seconds} </h1>
          <h5>Seconds</h5>
        </div>
      </div>
    </div>
  );
}

export default Clock;
