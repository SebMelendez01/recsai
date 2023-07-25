import Image from "next/image"
interface CardProps {
    image:string, 
    title:string, 
    description:string
}

const Card = ({ image, title, description }: CardProps) => {
    return (
        <div className="grid justify-items-center text-center p-10">
            <Image className="" width={75} height={75} src={image} alt=''/>
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