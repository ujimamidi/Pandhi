import { useState } from 'react';
import './App.css'
import AddExercise from './components/AddExercise'
import ExerciseList from './components/ExerciseList'
import Navbar from './components/Navbar'

function App() {
  const [exercises, setExercises] = useState([]); // stores exercises
  return (
    <div className='max-w-3xl mx-auto px-6'>
      <Navbar />
      <AddExercise exercises={exercises} setExercises={setExercises}/>
      <ExerciseList exercises={exercises}/>
    </div>
  )
}

export default App
