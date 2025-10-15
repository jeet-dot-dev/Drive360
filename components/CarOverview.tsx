"use client"
import React from 'react';
import { Heart, MapPin } from 'lucide-react';

interface CarData {
  model: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  location: string;
  price: string;
  dealer?: string;
  dealerInfo?: string;
  shortlistCount?: number;
  fixedPrice?: boolean;
  priceIncludes?: string;
}

interface CarOverviewProps {
  carData?: CarData;
}

const CarOverview = ({ carData }: CarOverviewProps) => {
  // Car data with realistic details
  const defaultCarData: CarData = {
    model: "BMW X1 sDrive20i xLine",
    year: 2022,
    mileage: "59K km",
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Spinny Car Hub, Trillium Avenue, Gurgaon",
    price: "₹27.50 Lakh",
    dealer: "MAX",
    dealerInfo: "High quality, luxury cars",
    shortlistCount: 29,
    fixedPrice: true,
    priceIncludes: "Includes RC transfer, insurance & more"
  };

  const data = carData || defaultCarData;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Header with car title and heart icon */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {data.year} {data.model}
            </h2>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <span>{data.mileage}</span>
              <span className="mx-2">•</span>
              <span>{data.fuelType}</span>
              <span className="mx-2">•</span>
              <span>{data.transmission}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin size={14} className="mr-1" />
              <span>{data.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Heart size={20} className="text-gray-400 hover:text-red-500" />
            </button>
            {data.shortlistCount && (
              <span className="text-xs text-gray-500 mt-1">
                {data.shortlistCount} people shortlisted
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Dealer info */}
      {data.dealer && (
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center">
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
              {data.dealer}
            </div>
            <span className="text-sm text-gray-600">{data.dealerInfo}</span>
          </div>
        </div>
      )}

      {/* Price section */}
      <div className="p-4">
        {data.fixedPrice && (
          <div className="text-sm font-medium text-gray-700 mb-2">
            Fixed on road price
          </div>
        )}
        <div className="flex items-baseline mb-2">
          <span className="text-2xl font-bold text-gray-900">{data.price}</span>
          <span className="text-sm text-green-600 ml-2 font-medium">+ 1% TCS</span>
        </div>
        {data.priceIncludes && (
          <p className="text-sm text-gray-500">{data.priceIncludes}</p>
        )}
      </div>
    </div>
  );
};

export default CarOverview;
