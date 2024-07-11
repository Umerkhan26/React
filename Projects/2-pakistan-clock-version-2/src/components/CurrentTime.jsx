import { useState, useEffect } from "react";
function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log(" Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };
  }, []);

  return (
    <p className="lead fw-medium ">
      This is current time: {time.toLocaleString()}
    </p>
  );
}

export default CurrentTime;
