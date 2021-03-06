import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [resizeObserver] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(
    () => (resizeObserver.observe(ref.current), resizeObserver.disconnect),
    []
  );
  return [{ ref }, bounds];
}
