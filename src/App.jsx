import './App.css'
import AddExercise from './components/AddExercise'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='max-w-3xl mx-auto px-6'>
      <Navbar />
      <AddExercise />
    </div>
  )
}

export default App
