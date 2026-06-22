import { useState } from 'react';
import './App.css'
import AddExercise from './components/AddExercise'
import ExerciseList from './components/ExerciseList'
import Navbar from './components/Navbar'

function App() {
  const [exercises, setExercises] = useState([]); // stores exercises
  console.log(exercises)

  const handleAddSet = (currentExercise) => {
    setExercises(prev => 
      prev.map(exercise => {
        if (exercise.id === currentExercise) {
          const newSet = { id: crypto.randomUUID(), weight: "", reps: "" };
          return {...exercise, sets: [...exercise.sets, newSet]};
        }
        return exercise;
      })
    )
  }

  return (
    <div className='max-w-3xl mx-auto px-6'>
      <Navbar />
      <AddExercise exercises={exercises} setExercises={setExercises}/>
      <ExerciseList exercises={exercises} onAddSet={handleAddSet}/>
    </div>
  )
}

export default App
