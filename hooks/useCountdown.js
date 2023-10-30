import { useEffect, useState } from "react";

export default function useCountdown({ seconds }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount((current) => current - 1);
        return count;
      } else {
        clearInterval(interval);
        return count;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return count;
}
