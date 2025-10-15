"use client"
import React from 'react';
import { X } from 'lucide-react';

interface CalculatorResult {
  totalCost: number;
  costPerInvite: number;
  costPerDay: number;
}

interface PriceCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PriceCalculatorModal = ({ isOpen, onClose }: PriceCalculatorModalProps) => {
  const [invites, setInvites] = React.useState<number>(50);
  const [duration, setDuration] = React.useState<number>(3);
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  // Pricing configuration
  const baseRatePerInvite = 25; 
  const baseRatePerDay = 150; 

  React.useEffect(() => {
    // Calculate costs based on user inputs
    const inviteCost = invites * baseRatePerInvite;
    const durationCost = duration * baseRatePerDay;
    const totalCost = inviteCost + durationCost;
    
    // Derive per-unit costs for analysis
    const costPerInvite = totalCost / invites;
    const costPerDay = totalCost / duration;

    setResult({
      totalCost,
      costPerInvite,
      costPerDay
    });
  }, [invites, duration]);

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border border-gray-300 shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h3 className="text-xl font-semibold text-black">Event Price Calculator</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            {/* Number of Invites */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                Number of Invites
              </label>
              <input
                type="number"
                value={invites}
                onChange={(e) => setInvites(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                placeholder="Enter number of invites"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Min: 1</span>
                <span>Max: 1000</span>
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                Duration (Days)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="365"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                placeholder="Enter duration in days"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Min: 1 day</span>
                <span>Max: 365 days</span>
              </div>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-black">Calculation Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Invite Cost ({invites} × ${baseRatePerInvite}):</span>
                <span className="font-semibold text-black">${(invites * baseRatePerInvite).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration Cost ({duration} days × ${baseRatePerDay}):</span>
                <span className="font-semibold text-black">${(duration * baseRatePerDay).toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-black font-semibold">Total Cost:</span>
                  <span className="text-xl font-bold text-black">
                    ${result?.totalCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {result && (
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-3">Price Analysis</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded p-3 border border-gray-200">
                  <p className="text-gray-600 mb-1">Cost per Invite</p>
                  <p className="text-lg font-bold text-black">
                    ${result.costPerInvite.toFixed(2)}
                  </p>
                </div>
                <div className="bg-white rounded p-3 border border-gray-200">
                  <p className="text-gray-600 mb-1">Cost per Day</p>
                  <p className="text-lg font-bold text-black">
                    ${result.costPerDay.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <button
            onClick={onClose}
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculatorModal;
