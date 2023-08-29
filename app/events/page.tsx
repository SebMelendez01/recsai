import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import dalle_event from "@/public/images/dalle-event.png"


export default function events() {

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="text-black h-full xl:mt-0 sm:mt-10 px-4 mx-auto lg:max-w-8xl md:px-8">
                <div className='w-full flex items-center flex-col lg:flex-row justify-center'>
                    <div className="xl:pr-10 xl:pb-0 pb-10 ">
                        <h2 className='font-bold sm:text-7xl text-5xl '>Stay tuned for updates on RECSAI events...</h2>
                        {/* <h2 className='font-bold pt-5 sm:text-7xl text-5xl'>on RECSAI events...</h2> */}
                    </div>
                    <div className="xl:w-3/6 w-5/6">
                        <Image className="rounded-full" src={dalle_event} alt='' />
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
  }