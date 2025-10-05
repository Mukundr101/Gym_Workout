import React from 'react';

const Exercise = ({ muscle, exerciseIndex, exerciseData, onWeightChange, onCheckboxChange }) => {
  const { name, sets, completed } = exerciseData;

  const handleCheckbox = (e) => {
    onCheckboxChange(muscle, exerciseIndex, e.target.checked);
  };

  const handleWeight = (setIndex, e) => {
    onWeightChange(muscle, exerciseIndex, setIndex, e.target.value);
  };

  return (
    <div
      className={`p-4 rounded-lg transition-all duration-300 ${
        completed
          ? 'bg-green-900/30 border-2 border-green-500/50'
          : 'bg-gray-700/50 border-2 border-transparent hover:border-gray-600'
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <button
          onClick={() => onCheckboxChange(muscle, exerciseIndex, !completed)}
          className={`mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
            completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-500 hover:border-gray-400'
          }`}
        >
          {completed && (
            <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </button>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${completed ? 'text-green-400' : 'text-white'}`}>
            {name}
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2">
            {sets.map((weight, setIndex) => (
              <div key={setIndex}>
                <label className="block text-xs text-gray-400 mb-1">Set {setIndex + 1}</label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="999"
                    value={weight}
                    onChange={(e) => handleWeight(setIndex, e)}
                    placeholder="0"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 pr-8" // Added pr-8 for kg suffix
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;