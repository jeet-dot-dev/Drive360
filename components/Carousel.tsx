"use client"
import React from 'react'
import { ChevronLeft, ChevronRight, Maximize, RotateCcw } from 'lucide-react';

export const carImages = [
    { url: "/car1.avif" },
    { url: "/car2.avif" },
    { url: "/car3.avif" },
    { url: "/car4.avif" },
    { url: "/car5.avif" },
    { url: "/car6.avif" },
    { url: "/car7.avif" },
    { url: "/car8.avif" },
    { url: "/car9.avif" },
    { url: "/car10.avif" },
    { url: "/car11.avif" },
    { url: "/car12.avif" },
    { url: "/car13.avif" },
    { url: "/car14.avif" },
    { url: "/engine1.avif" },
    { url: "/interior1.avif" },
    { url: "/interior2.avif" },
    { url: "/interior3.avif" },
    { url: "/interior4.avif" },
    { url: "/interior5.avif" },
    { url: "/interior6.avif" },
    { url: "/interior7.avif" },
    { url: "/tyre1.avif" },
    { url: "/tyre2.avif" },
    { url: "/tyre3.avif" },
    { url: "/tyre4.avif" },
];

interface CarouselProps {
  currentIndex?: number;
  setCurrentIndex?: (index: number) => void;
  onFullscreenClick?: () => void;
  on360Click?: () => void;
}

const Carousel = ({ 
  currentIndex: externalCurrentIndex, 
  setCurrentIndex: externalSetCurrentIndex,
  onFullscreenClick,
  on360Click 
}: CarouselProps) => {

    const slides = carImages;
    const [internalCurrentIndex, setInternalCurrentIndex] = React.useState(0);
    
    // Determine which state to use - external takes priority
    const currentIndex = externalCurrentIndex !== undefined ? externalCurrentIndex : internalCurrentIndex;
    const setCurrentIndex = externalSetCurrentIndex || setInternalCurrentIndex;
 
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
  return (
    <div className='w-full h-full relative group'>
      <div 
        className='w-full h-full rounded-lg bg-center bg-cover duration-700 transition-all ease-in-out transform hover:scale-[1.02]' 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}
      >
         {/* Image overlay for better text visibility */}
         <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
         
         {/* Top Right Action Buttons */}
         <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button
             onClick={on360Click}
             className="bg-black/30 hover:bg-black/50 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm flex items-center gap-2"
           >
             <RotateCcw size={16} />
             View 360°
           </button>
           <button
             onClick={onFullscreenClick}
             className="bg-black/30 hover:bg-black/50 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm flex items-center gap-2"
           >
             <Maximize size={16} />
             Fullscreen
           </button>
         </div>
         
         {/* left arrow */}
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 sm:left-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-all duration-200 hover:scale-110 backdrop-blur-sm'>
            <ChevronLeft onClick={prevSlide} size={24} className="sm:w-[30px] sm:h-[30px]"/>
         </div>
         {/* right arrow */}
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 sm:right-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition-all duration-200 hover:scale-110 backdrop-blur-sm'>
            <ChevronRight onClick={nextSlide} size={24} className="sm:w-[30px] sm:h-[30px]"/>
         </div>
         
         {/* Image indicator dots */}
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
           {slides.map((_, index) => (
             <button
               key={index}
               onClick={() => setCurrentIndex(index)}
               className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 index === currentIndex 
                   ? 'bg-white scale-125' 
                   : 'bg-white/50 hover:bg-white/75'
               }`}
             />
           ))}
         </div>
      </div>
    </div>
  )
}

export default Carousel
