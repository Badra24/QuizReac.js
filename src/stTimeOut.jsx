import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const satCallbacks = useRef(callback);

  useEffect(() => {
    satCallbacks.current = callback;
  }, [callback]);

  useEffect(() => {
    const Time = () => satCallbacks.current();

    if (typeof delay !== "number") return;

    const A = setTimeout(Time, delay);

    return () => clearTimeout(A);
  }, [delay]);
}
