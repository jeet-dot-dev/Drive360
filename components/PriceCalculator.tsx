"use client"
import React from 'react';

interface PriceCalculatorProps {
  onOpenCalculator: () => void;
}

const PriceCalculator = ({ onOpenCalculator }: PriceCalculatorProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4">
        <h3 className="text-xl font-semibold text-black">Event Price Calculator</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Calculate event pricing based on number of invites and duration. 
          Get detailed breakdown and analysis for your event planning.
        </p>
        
        <button
          onClick={onOpenCalculator}
          className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Open Price Calculator
        </button>
      </div>
    </div>
  );
};

export default PriceCalculator;
