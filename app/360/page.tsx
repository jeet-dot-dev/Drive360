"use client";
import React, { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Car360Viewer = () => {
  const totalFrames = 27;
  const [frame, setFrame] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentFrame = useRef(frame);
  const router = useRouter()

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentFrame.current = frame;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX.current;
    const sensitivity = 5;
    const frameChange = Math.floor(deltaX / sensitivity);
    let newFrame = currentFrame.current + frameChange;
    if (newFrame > totalFrames) newFrame = ((newFrame - 1) % totalFrames) + 1;
    if (newFrame < 1) newFrame = totalFrames - ((1 - newFrame) % totalFrames);
    setFrame(newFrame);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    currentFrame.current = frame;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling while dragging
    const deltaX = e.touches[0].clientX - startX.current;
    const sensitivity = 5;
    const frameChange = Math.floor(deltaX / sensitivity);
    let newFrame = currentFrame.current + frameChange;
    if (newFrame > totalFrames) newFrame = ((newFrame - 1) % totalFrames) + 1;
    if (newFrame < 1) newFrame = totalFrames - ((1 - newFrame) % totalFrames);
    setFrame(newFrame);
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div
      className="relative w-full h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center overflow-hidden select-none cursor-grab touch-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 left-5 text-white flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition backdrop-blur-sm cursor-pointer z-50"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Car Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={`/360view/car${frame}.avif`}
          alt={`Car frame ${frame}`}
          width={1200}
          height={800}
          className="object-contain max-w-full max-h-full transition-all duration-75"
          draggable={false}
          priority
        />
      </div>

      {/* Instructions */}
     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-md border border-white/20"> 
       <span className="hidden sm:inline">Drag left or right to rotate the car</span>
       <span className="sm:hidden">Swipe left or right to rotate the car</span>
     </div>
    </div>
  );
};

export default Car360Viewer;
