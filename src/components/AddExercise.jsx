import { useEffect, useState } from "react";

function AddExercise({exercises, setExercises}) {

    const [userInput, setUserInput] = useState("");

    // creates exercise object
    const exerciseItem = {
        id: crypto.randomUUID(),
        exerciseName: userInput,
        sets: []
    }

    const handleInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleAddExercise = () => {
        if (userInput.trim() === "") {
            return;
        }

        console.log(userInput)
        setExercises(prev => [...prev, exerciseItem]); // take old array, and add new element to it.

        // clear input
        setUserInput('');
    }

    // to see log output 
    useEffect(() => {
        console.log(exercises)
    }, [exercises])

    return (
        <div>
            <p className="italic text-sm mt-3">Today's session</p>
            <div className="flex flex-row justify-between mt-2 text-sm">
                <input 
                    type="text" 
                    placeholder="Add an exercise, eg. Bench Press" 
                    className="bg-[#ffffff] px-3 w-full rounded-lg border-2"
                    value={userInput}
                    onChange={handleInput}
                />
                <button className="py-2 px-2 ml-3 whitespace-nowrap rounded-lg border-2" onClick={handleAddExercise}>+ Add</button>
            </div>
        </div>
    )
}

export default AddExercise;