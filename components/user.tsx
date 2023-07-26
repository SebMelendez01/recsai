import SocialMedia from "./social-media";
import Image from "next/image";
import Link from "next/link";



interface ProfileProps {
    name:string, 
    title:string,
    twitter?:string,
    linkedin?:string,
    external?:string
}

export default function User({name, title, twitter, linkedin, external}: ProfileProps) {
    const slug = name.split(" ").join("");

    return (
        <div className="w-full max-w-sm bg-white border border-black shadow ">
            <div className="flex flex-col items-center pb-10">
                <Image className="mb-3 mt-10 rounded-full border border-black" width={125} height={125} src={`/profiles/${slug}.png`} alt=""/>
                <h5 className="mb-1 text-xl font-bold text-black ">{name}</h5>
                <span className="text-sm text-black font-light">{title}</span>
                <div className="flex justify-center text-black my-3">
                    <SocialMedia twitter={twitter} linkedin={linkedin} external={external}/>

                </div>
                <Link href={`/team/${slug}`} className="items-center px-4 py-2 text-sm font-medium text-center text-black bg-white border border-black hover:text-white hover:bg-black ">Read More</Link>
            </div>
        </div>
    );
}