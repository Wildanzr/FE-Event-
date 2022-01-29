import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'

import "../../css/HideScrollBar.css"

const CardTestimony = ({rate, testi, name, pic, org}) => {

    const isEven = rate % 2 == 0 ? true : false
    const rating = isEven ? rate / 2 : rate / 2 - 0.5
    

    return (
        <div className="flex flex-col w-80 h-80 bg-[#fefefe] rounded-xl shadow-xl mx-5">
            <div className="flex mx-10 my-10">
                {Array.from(Array(rating), (i, e) => {
                    return (
                        <StarIcon color="warning" key={e} />
                    )
                })}
                {isEven ? "" : <StarHalfIcon color="warning" />}             
            </div>
            <div className="flex justify-start mx-10 h-full overflow-y-auto hide-scroll-bar">
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