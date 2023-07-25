import Image from "next/image"

import reseach from '../public/images/research.png'
import promote from '../public/images/promote.png'
import connect from '../public/images/connect.png'
import coordinate from '../public/images/coordinate.png'
interface CardProps {
    title:string, 
    description:string
}

const Card = ({title, description }: CardProps) => {
    return (
        <div className="grid justify-items-center text-center p-10">
            <Image 
                className="" width={75} height={75} 
                src={
                    "Research" === title ? reseach : 
                    "Promote" === title ? promote : 
                    "Connect" === title ? connect :
                    coordinate
                } alt=''
            />
            <div className="py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base w-60 font-light">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Card;