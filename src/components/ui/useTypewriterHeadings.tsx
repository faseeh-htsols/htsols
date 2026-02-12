"use client";
import { useEffect, useRef, useState } from "react";

const HEADINGS = [
  "Why Shouldn't I Just Use a Cheap AI Video Instead of CGI?",
  "Custom CGI vs AI Video: Why It Matters?",
  "The Truth About AI Video vs Professional CGI",
];

export function useTypewriterHeadings() {
  const [displayText, setDisplayText] = useState("");

  const idxRef = useRef(0);
  const deletingRef = useRef(false);
  const textRef = useRef("");
  const timerRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const tick = () => {
      const idx = idxRef.current;
      const full = HEADINGS[idx];
      const deleting = deletingRef.current;
      const current = textRef.current;

      const next = deleting
        ? full.slice(0, Math.max(0, current.length - 1))
        : full.slice(0, current.length + 1);

      textRef.current = next;
      setDisplayText(next);

      const doneTyping = !deleting && next === full;
      const doneDeleting = deleting && next === "";

      let delay = deleting ? 30 : 45;

      if (doneTyping) {
        deletingRef.current = true;
        delay = 1400;
      } else if (doneDeleting) {
        deletingRef.current = false;
        idxRef.current = (idx + 1) % HEADINGS.length;
        delay = 250;
      }

      timerRef.current = window.setTimeout(tick, delay);
    };

    tick();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = null;
      startedRef.current = false;
    };
  }, []);

  return displayText;
}
