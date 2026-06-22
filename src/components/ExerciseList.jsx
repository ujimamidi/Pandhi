import ExerciseItem from "./ExerciseItem";

function ExerciseList({exercises}) {
    return (
        <div className="flex flex-col gap-3 mt-5">
            {exercises.map((exercise) => (
                <ExerciseItem 
                    key={exercise.id} 
                    exerciseName={exercise.exerciseName} 
                    sets={exercise.sets}
                />
            ))}
        </div>
    )
}

export default ExerciseList;