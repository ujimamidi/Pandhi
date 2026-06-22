import ExerciseItem from "./ExerciseItem";

function ExerciseList({exercises, onAddSet}) {
    return (
        <div className="flex flex-col gap-3 mt-5">
            {exercises.map((exercise) => (
                <ExerciseItem 
                    key={exercise.id}
                    exerciseID = {exercise.id}
                    exerciseName={exercise.exerciseName} 
                    sets={exercise.sets}
                    onAddSet={onAddSet}
                />
            ))}
        </div>
    )
}

export default ExerciseList;