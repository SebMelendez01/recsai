import Link from "next/link";
import SocialMedia from "./social-media";

export default function Footer() {
    return (
        <footer className="bg-white text-black mt-auto w-full p-4 absolute bottom-0">
            <div className="lg:flex p-4 lg:items-center lg:justify-between">
                <span className="lg:text-left text-center">
                    <div className="font-light lg:text-[16px] lg:w-[305px] text-[3.82vw]"> 
                        The International Expert Consortium on the
                    </div>
                    <div className="font-bold lg:text-[13px] lg:w-[305px] text-[3.1vw]">
                        Regulation, Economics and Computer Science of AI
                    </div>
                </span>
                <div className="flex justify-center my-10">
                    <SocialMedia twitter="https://twitter.com/aiglobalexperts/" linkedin="https://www.linkedin.com/company/recsai" instagram="https://www.instagram.com/aiglobalexperts/" />
                </div>
                
                <ul className="flex justify-center text-sm sm:mt-0 font-thin">
                    <li>
                        <Link href="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                    </li>
                    <li>
                        <Link href="/team" className="mr-4 hover:underline md:mr-6">Team</Link>
                    </li>
                    <li>
                        <a href="https://medium.com/@internationalrecsai" target="_blank" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <Link href="/disclaimer" className="mr-4 hover:underline md:mr-6">Disclaimer</Link>
                    </li>
                    <li>
                        <a href="mailto: internationalrecsai@gmail.com" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
  }