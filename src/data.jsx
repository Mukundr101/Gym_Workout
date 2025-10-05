export const initialWorkoutData = {
  "Chest": {
    exercises: [
      { name: "Bench Press", sets: ["", "", ""], completed: false },
      { name: "Incline Press", sets: ["", "", ""], completed: false },
      { name: "Cable Flyes", sets: ["", "", ""], completed: false },
      { name: "Pec Dec Fly", sets: ["", "", ""], completed: false },
      { name: "Chest Dips", sets: ["", "", ""], completed: false },
    ]
  },
  "Back": {
    exercises: [
      { name: "Lat Pulldowns", sets: ["", "", ""], completed: false },
      { name: "Reversed Grip  Pulldowns", sets: ["", "", ""], completed: false },
      { name: "Cable Rows", sets: ["", "", ""], completed: false },
      { name: "Wide Grip Cable Rows", sets: ["", "", ""], completed: false },
      { name: "Barebell Rows", sets: ["", "", ""], completed: false },
    ]
  },
  "Shoulders": {
    exercises: [
      { name: "Overhead Press", sets: ["", "", ""], completed: false },
      { name: "Lateral Raises", sets: ["", "", ""], completed: false },
      { name: "Front Raises", sets: ["", "", ""], completed: false },
      { name: "Rear Delt Flyes", sets: ["", "", ""], completed: false },
      { name: "Shrugs", sets: ["", "", ""], completed: false },
    ]
  },
  "Biceps": {
    exercises: [
      { name: "Dumbell Curls", sets: ["", "", ""], completed: false },
      { name: "Hammer Curls", sets: ["", "", ""], completed: false },
      { name: "Preacher Curls", sets: ["", "", ""], completed: false },
      { name: "Concentration Curls", sets: ["", "", ""], completed: false },
      { name: "Cable Curls", sets: ["", "", ""], completed: false },
    ]
  },
  "Triceps": {
    exercises: [
      { name: "Tricep Pushdowns", sets: ["", "", ""], completed: false },
      { name: "Lateral cable tricep extension", sets: ["", "", ""], completed: false },
      { name: "Overhead Extension", sets: ["", "", ""], completed: false },
      { name: "Close-grip Bench", sets: ["", "", ""], completed: false },
      { name: "Tricep Dips", sets: ["", "", ""], completed: false },
    ]
  },
  "Legs": {
    exercises: [
      { name: "Leg Press", sets: ["", "", ""], completed: false },
      { name: "Hack Squats", sets: ["", "", ""], completed: false },
      { name: "Hmstring Curls", sets: ["", "", ""], completed: false },
      { name: "Leg Curls", sets: ["", "", ""], completed: false },
      { name: "Calf Raises", sets: ["", "", ""], completed: false },
    ]
  },
  "Core": {
    exercises: [
      { name: "Planks", sets: ["", "", ""], completed: false },
      { name: "Crunches", sets: ["", "", ""], completed: false },
      { name: "Russian Twists", sets: ["", "", ""], completed: false },
      { name: "Leg Raises", sets: ["", "", ""], completed: false },
      { name: "Cable Woodchops", sets: ["", "", ""], completed: false },
    ]
  }
};

// Also add the colors and icons here for better organization
export const muscleGroupColors = {
  Chest: 'from-red-600 to-red-700',
  Back: 'from-blue-600 to-blue-700',
  Shoulders: 'from-purple-600 to-purple-700',
  Biceps: 'from-pink-600 to-pink-700',
  Triceps: 'from-orange-600 to-orange-700',
  Legs: 'from-green-600 to-green-700',
  Core: 'from-yellow-600 to-yellow-700'
};

export const muscleGroupIcons = {
  Chest: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10 2 8 3 8 5v3c0 1-1 2-2 2H4v4h2c1 0 2 1 2 2v3c0 2 2 3 4 3s4-1 4-3v-3c0-1 1-2 2-2h2v-4h-2c-1 0-2-1-2-2V5c0-2-2-3-4-3z"/>
    </svg>
  ),
  Back: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-1 0-2 1-2 2v2H8c-1 0-2 1-2 2v8c0 1 1 2 2 2h2v2c0 1 1 2 2 2s2-1 2-2v-2h2c1 0 2-1 2-2V8c0-1-1-2-2-2h-2V4c0-1-1-2-2-2zm-4 6h8v8H8V8z"/>
    </svg>
  ),
  Shoulders: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L8 6v4l4-2 4 2V6l-4-4zM4 8v8c0 2 1 3 2 3s2-1 2-3V8H4zm12 0v8c0 2 1 3 2 3s2-1 2-3V8h-4z"/>
    </svg>
  ),
  Biceps: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 4c-2 0-3 1-3 3v4c0 3 2 5 5 5h4c3 0 5-2 5-5V7c0-2-1-3-3-3-1 0-2 .5-2 1.5V10h-4V5.5C10 4.5 9 4 8 4zm2 12v6h4v-6h-4z"/>
    </svg>
  ),
  Triceps: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L8 6v3h8V6l-4-4zM7 10v8c0 2 1 4 3 4h4c2 0 3-2 3-4v-8H7zm3 2h4v6h-4v-6z"/>
    </svg>
  ),
  Legs: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 2h8v8H8V2zm-2 10h4v10H6V12zm8 0h4v10h-4V12z"/>
    </svg>
  ),
  Core: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="3"/>
      <path d="M12 12c-3 0-5 1-5 3v5c0 1 1 2 2 2h6c1 0 2-1 2-2v-5c0-2-2-3-5-3z"/>
    </svg>
  )
};