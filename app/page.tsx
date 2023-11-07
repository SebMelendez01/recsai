import Image from "next/image";
import Navbar from "@/components/navbar";

import dalle from "../public/images/dalle-eu-parliament.png";
import sd from "../public/images/stable-diffusion-vvg.jpeg";
import ens from "../public/logos/ens-logo.webp";
import wharton from "../public/logos/wharton-logo.svg";
import Footer from "@/components/footer";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      {/* Introduction  */}
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:flex md:items-center md:px-8 mb-20">
        <div className="text-black md:pr-20 md:w-9/12">
          <div className="text-center">
            <h1 className="font-light md:text-[2.65vw] md:w-[50vw] text-[4.6vw]">
              The International Expert Consortium on the
            </h1>
            <h1 className="font-bold md:text-[2.15vw] md:w-[50vw] text-[3.75vw]">
              Regulation, Economics and Computer Science of AI
            </h1>
          </div>
          <p className="font-light mt-10 md:mb-32 mb-10 text-justify">
            The International Expert Consortium on the Regulation, Economics,
            and Computer Science of AI (RECSAI) provides a platform to
            facilitate cross-disciplinary enquiries on key questions and
            challenges related to artificial intelligence. The consortium
            consists of experts from around the globe who are interested in
            engaging in research, education, and thought leadership to shape the
            evolution of artificial intelligence in our world. RECSAI believes
            that bringing leading thinkers together to tackle the issues
            surrounding artificial intelligence will drive positive change.
          </p>
          {/* <div className='flow-root'>
            <div>
              <Image className="h-auto md:w-2/5 w-5/12 float-left" src={ens} alt=''/>
            </div>
            <div>
              <Image className="h-auto md:w-2/5 w-5/12 float-right" src={wharton} alt=''/>
            </div>
          </div> */}
        </div>
        <div className="md:m-0 mt-10">
          <Image className="object-cover" src={dalle} alt="" />
        </div>
      </div>
      {/* Our Impact */}
      <div className="text-black">
        <div className="w-full">
          <h2 className="flex justify-center font-bold text-4xl">Our Impact</h2>
          <hr className="w-48 h-px mx-auto bg-black border-0 rounded my-2" />
        </div>
        <div className="xl:flex xl:justify-evenly px-4 xl:px-8 ">
          <div>
            <Card
              title="Research"
              description="We enable transnational, interdisciplinary research through annual conferences and events."
            />
          </div>
          <div>
            <Card
              title="Coordinate"
              description="We coordinate policy advice across national and regional boundaries."
            />
          </div>
          <div>
            <Card
              title="Connect"
              description="We connect leading AI scholars from various fields and continents."
            />
          </div>
          <div>
            <Card
              title="Promote"
              description="We promote a global network of scholars and thought leaders dedicated to furthering the potential of responsible AI while mitigating its risks."
            />
          </div>
        </div>
      </div>
      {/* Our Focus */}
      <div className="text-black w-full px-4 mx-auto lg:max-w-8xl md:px-8 md:flex md:items-center">
        <div className="md:w-8/12">
          <h2 className="font-bold text-4xl">Our Focus</h2>
          <hr className="w-48 h-px bg-black border-0 rounded mt-2 mb-10" />
          <p className="font-light text-justify	">
            Since the early 2000s, the modern version of AI (deep learning) has
            excelled at performing narrow, specific tasks (e.g., recognizing
            patterns in data). Now, we are witnessing the birth of a new
            generation of AI models in real time with the emergence of
            increasingly powerful large generative AI models. These models
            handle a wide range of problems, power various downstream
            applications, and can produce human-level text, images, videos,
            music, or even art. However, current AI regulation in the EU, the
            US, and elsewhere is not yet fully prepared for the advent of these
            models. This latest generation of AI models will be the initial
            focus of RECSAI. Through events and publications, we seek to
            contribute to a better understanding of these models, the optimal
            legal environment, and possible avenues for international
            collaboration and regulation.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <Image className="md:p-20" src={sd} alt="" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
