"use client"
import Carousel, { carImages } from "@/components/Carousel";
import CarOverview from "@/components/CarOverview";
import FullscreenModal from "@/components/FullscreenModal";
import PriceCalculator from "@/components/PriceCalculator";
import PriceCalculatorModal from "@/components/PriceCalculatorModal";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = React.useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = React.useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = React.useState(false);
  const thumbnailsPerView = 5;
  const router = useRouter();

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    // Keep selected thumbnail visible in the thumbnail strip
    if (index < thumbnailStartIndex) {
      setThumbnailStartIndex(index);
    } else if (index >= thumbnailStartIndex + thumbnailsPerView) {
      setThumbnailStartIndex(index - thumbnailsPerView + 1);
    }
  };

  const handleFullscreenClick = () => {
    setIsFullscreenOpen(true);
  };

  const handle360Click = () => {
    router.push('/360');
  };

  const scrollThumbnailsLeft = () => {
    setThumbnailStartIndex(Math.max(0, thumbnailStartIndex - 1));
  };

  const scrollThumbnailsRight = () => {
    setThumbnailStartIndex(
      Math.min(carImages.length - thumbnailsPerView, thumbnailStartIndex + 1)
    );
  };

  const visibleThumbnails = carImages.slice(
    thumbnailStartIndex,
    thumbnailStartIndex + thumbnailsPerView
  );

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        const newIndex = currentIndex === 0 ? carImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        // Keep current image visible in thumbnail strip
        if (newIndex < thumbnailStartIndex) {
          setThumbnailStartIndex(newIndex);
        } else if (newIndex >= thumbnailStartIndex + thumbnailsPerView) {
          setThumbnailStartIndex(newIndex - thumbnailsPerView + 1);
        }
      } else if (event.key === 'ArrowRight') {
        const newIndex = currentIndex === carImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        // Keep current image visible in thumbnail strip
        if (newIndex < thumbnailStartIndex) {
          setThumbnailStartIndex(newIndex);
        } else if (newIndex >= thumbnailStartIndex + thumbnailsPerView) {
          setThumbnailStartIndex(newIndex - thumbnailsPerView + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, thumbnailStartIndex, thumbnailsPerView]);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2">Drive360</h1>
          <Separator className="w-full" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Image Section */}
            <div className="flex-1 lg:w-[60%]">
              {/* Main Carousel */}
              <div className="w-full aspect-video bg-amber-50 rounded-lg overflow-hidden shadow-lg relative">
                <Carousel 
                  currentIndex={currentIndex} 
                  setCurrentIndex={setCurrentIndex}
                  onFullscreenClick={handleFullscreenClick}
                  on360Click={handle360Click}
                />
                
                {/* Image counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  {currentIndex + 1} / {carImages.length}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="mt-4 mb-6">
                <div className="relative">
                  {/* Thumbnail navigation arrows */}
                  {thumbnailStartIndex > 0 && (
                    <button 
                      onClick={scrollThumbnailsLeft}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  
                  {thumbnailStartIndex + thumbnailsPerView < carImages.length && (
                    <button 
                      onClick={scrollThumbnailsRight}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  )}

                  <div className="flex gap-2 overflow-hidden px-6">
                    {visibleThumbnails.map((image, index) => {
                      const actualIndex = thumbnailStartIndex + index;
                      return (
                        <Image 
                          key={actualIndex}
                          src={image.url} 
                          alt={`Car view ${actualIndex + 1}`} 
                          width={160}
                          height={96}
                          onClick={() => handleThumbnailClick(actualIndex)}
                          className={`flex-shrink-0 w-20 h-12 sm:w-24 sm:h-14 md:w-32 md:h-20 lg:w-40 lg:h-24 object-cover rounded border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                            currentIndex === actualIndex 
                              ? 'border-blue-500 shadow-lg scale-105 ring-2 ring-blue-300' 
                              : 'border-gray-200 hover:border-blue-400'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 lg:w-[40%] space-y-6">
              {/* Car Overview Component */}
              <CarOverview />
              
              {/* Price Calculator Component */}
              <PriceCalculator onOpenCalculator={() => setIsCalculatorOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <FullscreenModal
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        images={carImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      {/* Price Calculator Modal */}
      <PriceCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>


  );
};

export default Page;
