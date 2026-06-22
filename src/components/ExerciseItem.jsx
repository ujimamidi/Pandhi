function ExerciseItem({exerciseName}) {
    return (
        <div className="border-2 p-4 rounded-lg flex flex-col">
            <header className="text-sm">{exerciseName}</header>
            <button className="py-2 px-2 mt-3 whitespace-nowrap rounded-lg border-2 w-fit text-xs">+ Add set</button>
        </div>
    )
}

export default ExerciseItem;