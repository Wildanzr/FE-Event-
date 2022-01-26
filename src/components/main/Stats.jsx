import "./Stats.css"

const Stats = () => {
    return (
        <div className="flex flex-col items-center justify-center text-[#003366] lg:flex-row">
            <div className="leftStat bg-[#FF5252] py-10 px-10 mx-auto">
                <h3 className="text-lg">Jumlah event organizer terdaftar</h3>
                <p className="text-6xl font-bold">500+</p>
            </div>
            <div className=" bg-[#F9E03C] py-10 px-10 mx-auto">
                <h3 className="text-lg">Jumlah event terlaksana</h3>
                <p className="text-6xl font-bold">500+</p>
            </div>
            <div className="rightStat bg-[#4DB6AC]  py-10 px-10 mx-auto">
                <h3 className="text-lg">Jumlah event sponsor terdaftar</h3>
                <p className="text-6xl font-bold">500+</p>
            </div>

        </div>
    )
}

export default Stats