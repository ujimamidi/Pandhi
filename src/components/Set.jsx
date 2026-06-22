function Set({ number, weight, reps}) {
    return (
        <div className="flex flex-row justify-evenly text-xs mt-3 bg-amber-500 items-center text-center">
            <div>
                <h1>{number + 1}</h1>
            </div>
            <h1>{weight}</h1>
            <h1>{reps}</h1>
        </div>
    )
}

export default Set;