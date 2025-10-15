"use client"
import React from 'react';

interface CarData {
  model: string;
  year: number;
  mileage: string;
  price: string;
}

interface CarOverviewProps {
  carData?: CarData;
}

const CarOverview = ({ carData }: CarOverviewProps) => {
  // Default car data if none provided
  const defaultCarData: CarData = {
    model: "Tesla Model S",
    year: 2024,
    mileage: "12,500 miles",
    price: "$89,900"
  };

  const data = carData || defaultCarData;

  const overviewItems = [
    {
      label: "Model",
      value: data.model
    },
    {
      label: "Year",
      value: data.year.toString()
    },
    {
      label: "Mileage",
      value: data.mileage
    },
    {
      label: "Price",
      value: data.price
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4">
        <h3 className="text-xl font-semibold text-black">Car Overview</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {overviewItems.map((item, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="text-black font-semibold">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Last Updated:</span>
            <span className="text-black font-medium">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
