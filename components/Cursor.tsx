"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let rafId: number;
    const loop = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.115;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.115;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + "px";
        ringRef.current.style.top  = pos.current.ry + "px";
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
