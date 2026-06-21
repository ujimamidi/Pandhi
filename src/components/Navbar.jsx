function Navbar() {
    const currentDate = new Date().toDateString();

    return (
        <div className="flex flex-row items-center justify-between mt-5">
            <h1 className="font-bbh text-lg">PANDHI</h1>
            <p className="text-sm italic">{currentDate}</p>
        </div>
    )
}

export default Navbar;