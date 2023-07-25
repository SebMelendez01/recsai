import Link from "next/link";
import SocialMedia from "./social-media";

export default function Footer() {
    return (
        <footer className="bg-white m-4 text-black ">
            <div className="w-full p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm xl:text-left text-center">
                    {/* <a href="https://flowbite.com/" className="hover:underline">RECSAI</a>. */}
                    <div className="font-light md:text-[19px] md:w-[360px] text-[4vw]">
                        The International Expert Consortium on the
                    </div>
                    <div className="font-bold md:text-[15.5px] md:w-[360px] text-[3.25vw]">
                        Regulation, Economics and Computer Science of AI
                    </div>
                </span>
                <div className="flex justify-center my-10">
                    <SocialMedia/>
                </div>
                
                <ul className="flex justify-center text-sm sm:mt-0 font-thin">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">Team</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">Blog</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">Disclaimer</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
  }