import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'

const CardTestimony = ({rate, testi, name, pic, org}) => {

    const isEven = rate % 2 == 0 ? true : false
    const rating = isEven ? rate / 2 : rate / 2 - 0.5
    const rateData = []
    for (var i = 0; i < rating; i++) {
        rateData[i] = i
    }
    

    return (
        <div className="flex flex-col w-80 h-80 bg-[#fefefe] rounded-xl shadow-xl mx-5">
            <div className="flex mx-10 my-10">
                {rateData.map((id) => {
                    return (
                        <StarIcon key={id} />
                    )
                })}
                {isEven ? "" : <StarHalfIcon/>}             
            </div>
            <div className="flex justify-start mx-10">
                <p>“{testi}”</p>
            </div>
            <div className="flex flex-row justify-start mx-10 my-10">
                <div className="w-14 h-14 bg-rose-500 rounded-full overflow-clip">
                    <img src={pic} className="w-full h-full" />
                </div>
                <div className="flex flex-col mx-5">
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-lg font-bold">{org}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTestimony