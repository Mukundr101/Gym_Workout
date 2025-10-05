import React, { useState } from 'react';
import Exercise from './Exercise';
import { ChevronDown, ChevronUp } from 'lucide-react'; 
import { muscleGroupColors, muscleGroupIcons } from '../data'; 

const MuscleGroup = ({ muscle, exercises, onWeightChange, onCheckboxChange, onResetGroup }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedCount = exercises.filter(ex => ex.completed).length;
  const totalCount = exercises.length;
  

  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/10">
      {/* Group Header */}
      <div
        className={`bg-gradient-to-r ${muscleGroupColors[muscle]} p-4 sm:p-5 cursor-pointer transition-all duration-300 hover:opacity-90`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              {muscleGroupIcons[muscle]} 
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{muscle}</h2>
              <p className="text-sm text-white/80">{completedCount}/5 exercises completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isExpanded && completedCount > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); onResetGroup(muscle); }}
                className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Clear
              </button>
            )}
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Exercises */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-4 animate-fadeIn"> 
          {exercises.map((exercise, index) => (
            <Exercise
              key={index}
              muscle={muscle}
              exerciseIndex={index}
              exerciseData={exercise}
              onWeightChange={onWeightChange}
              onCheckboxChange={onCheckboxChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MuscleGroup;