import Set from "./Set";

function ExerciseItem({exerciseID, exerciseName, sets, onAddSet }) {

    return (
        <div className="border-2 p-4 rounded-lg flex flex-col">
            <header className="text-sm">{exerciseName}</header>
            {sets.length > 0 && (
                <div className="flex flex-row justify-evenly text-xs mt-3">
                    <div>
                        <h1>Set</h1>
                    </div>
                    <h1>Weight (kg)</h1>
                    <h1>Reps</h1>
                </div>
            )}
            {sets.map((set, index) => {
                return (
                    <Set 
                        key={set.id}
                        number={index}
                        weight={set.weight}
                        reps={set.reps}
                    />
                )
            })}
            <button className="py-2 px-2 mt-3 whitespace-nowrap rounded-lg border-2 w-fit text-xs" onClick={() => onAddSet(exerciseID)}>+ Add set</button>
        </div>
    )
}

export default ExerciseItem;