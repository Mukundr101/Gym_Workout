import React, { useState, useEffect, useCallback } from 'react';
import MuscleGroup from './components/MuscleGroup';
import { initialWorkoutData } from './data';
import { Dumbbell, Calendar } from 'lucide-react';

function App() {
  const [workoutData, setWorkoutData] = useState(initialWorkoutData);
  const [currentDate, setCurrentDate] = useState('');

  // This useEffect for loading data .
  useEffect(() => {
    const savedData = localStorage.getItem('gymWorkoutData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // This migration logic is good.
        if (parsedData.Arms && !parsedData.Biceps && !parsedData.Triceps) {
          setWorkoutData(initialWorkoutData);
          localStorage.setItem('gymWorkoutData', JSON.stringify(initialWorkoutData));
        } else if (parsedData.Biceps && parsedData.Triceps) {
          setWorkoutData(parsedData);
        } else {
          setWorkoutData(initialWorkoutData);
        }
      } catch (e) {
        console.error("Error parsing saved workout data, resetting to initial.", e);
        setWorkoutData(initialWorkoutData);
      }
    }
    setCurrentDate(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  // This useEffect for saving data .
  useEffect(() => {
    localStorage.setItem('gymWorkoutData', JSON.stringify(workoutData));
  }, [workoutData]);


  

  const handleWeightChange = useCallback((muscle, exerciseIndex, setIndex, weight) => {
    setWorkoutData(prevData => {
      const newExercises = [...prevData[muscle].exercises];
      const newSets = [...newExercises[exerciseIndex].sets];
      newSets[setIndex] = weight;
      newExercises[exerciseIndex] = { ...newExercises[exerciseIndex], sets: newSets };

      return {
        ...prevData,
        [muscle]: { ...prevData[muscle], exercises: newExercises }
      };
    });
  }, []);

  const handleCheckboxChange = useCallback((muscle, exerciseIndex, isCompleted) => {
    setWorkoutData(prevData => {
      const newExercises = [...prevData[muscle].exercises];
      newExercises[exerciseIndex] = { ...newExercises[exerciseIndex], completed: isCompleted };
      
      return {
        ...prevData,
        [muscle]: { ...prevData[muscle], exercises: newExercises }
      };
    });
  }, []);

  const handleResetGroup = useCallback((muscle) => {
    setWorkoutData(prevData => {
      const resetExercises = prevData[muscle].exercises.map(exercise => ({
        ...exercise,
        completed: false,
        sets: ["", "", ""],
      }));
      
      return {
        ...prevData,
        [muscle]: { ...prevData[muscle], exercises: resetExercises }
      };
    });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Dumbbell className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Workout Tracker
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            <p>{currentDate}</p>
          </div>
        </div>

        {/* Muscle Groups */}
        <div className="space-y-4">
          {Object.entries(workoutData).map(([muscle, data]) => (
            <MuscleGroup
              key={muscle}
              muscle={muscle}
              exercises={data.exercises}
              onWeightChange={handleWeightChange}
              onCheckboxChange={handleCheckboxChange}
              onResetGroup={handleResetGroup}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Your workout data is saved automatically</p>
        </div>
      </div>
    </div>
  );
}

export default App;