"use client"
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const FullscreenModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  setCurrentIndex 
}: FullscreenModalProps) => {
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex, onClose, setCurrentIndex, images.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Back/Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <X size={24} />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-4 py-2 rounded-full font-medium backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight size={32} />
      </button>

      {/* Main Image */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <Image
          src={images[currentIndex].url}
          alt={`Car view ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm backdrop-blur-sm bg-black/30 px-3 py-2 rounded">
        Press ESC to close • Use arrow keys to navigate
      </div>
    </div>
  );
};

export default FullscreenModal;
