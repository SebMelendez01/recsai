import Link from "next/link";
import SocialMedia from "./social-media";

export default function Footer() {
    return (
        <footer className="bg-white m-4 text-black ">
            <div className="w-full p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm xl:text-left text-center">
                    <div className="font-light md:text-[19px] md:w-[360px] text-[4vw]">
                        The International Expert Consortium on the
                    </div>
                    <div className="font-bold md:text-[15.5px] md:w-[360px] text-[3.25vw]">
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
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
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