"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SocialMedia from "./social-media";
import RECSAI_xl from "../public/logos/recsai-large.png";
import RECSAI_sm from "../public/logos/recsai-small.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <Image
                className="h-20 w-auto xl:hidden "
                src={RECSAI_sm}
                alt=""
              />
              <Image
                className="h-32 w-auto hidden xl:block"
                src={RECSAI_xl}
                alt=""
              />
            </a>
            <div className="md:hidden">
              <button className="" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-5 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-light text-black">
              <li className="flex justify-center">
                <Link href="/">Home</Link>
              </li>
              <li className="flex justify-center">
                <Link href="/team">Experts</Link>
              </li>
              <li className="flex justify-center">
                <a
                  href="https://medium.com/@internationalrecsai"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="flex justify-center">
                <Link href="/events">Events</Link>
              </li>
              <li className="flex justify-center">
                <SocialMedia
                  twitter="https://twitter.com/aiglobalexperts/"
                  linkedin="https://www.linkedin.com/company/recsai"
                  instagram="https://www.instagram.com/aiglobalexperts/"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
