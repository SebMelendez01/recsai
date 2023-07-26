import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className="text-black">
                <div className='w-full mb-10'>
                    <h2 className='flex justify-center font-bold text-4xl'>About Us</h2>
                    <hr className="w-48 h-px mx-auto bg-black border-0 rounded my-2"/>
                </div>
                <div className="px-4 mx-auto lg:max-w-8xl text-center md:flex md:px-32">
                    <p className='font-light'>
                        The goal of the International Expert Consortium on the Regulation, Computer Science and Economics 
                        of AI (RECSAI) is to bring together thought leaders from around the world to discuss the broad 
                        technical and legal implications of recent advances in generative and other AI systems. It will 
                        facilitate an interdisciplinary exchange of thoughts, ideas, and papers, as well as the organization 
                        of events in the U.S. and the EU. At the same time, however, it is also supposed to coordinate and 
                        advance transatlantic, science-based policy advice in the area of large-scale AI models. Against this 
                        background, it has three specific goals.
                        <br/>
                        <br/>
                        First, the European, US, and broader global regulatory architecture for large generative AI models 
                        such as ChatGPT will be examined, critically analyzed and discussed. While the initial focus is on 
                        the US and the EU, eventually, all continents and major regions of the world will be represented. 
                        <br/>
                        <br/>
                        Second, proposals for optimizing regulation will be developed on this basis. These can then help shape 
                        the legislative process in the EU, in Brazil and the USA, other regions of the world, and on the global 
                        stage.
                        <br/>
                        <br/>
                        Third, the transatlantic and global exchange on AI regulation will be intensified in the long term. This 
                        is particularly important against the background of global AI regulation initiatives, for example at the 
                        United Nations. 
                        <br/>
                        <br/>
                        The overall goal is to create a productive community that connects and inspires eminent researchers, 
                        policy makers, and industry leaders in the field of AI and regulation. The overall goal is to create a 
                        productive community that connects and inspires.
                        <br/>
                        <br/>
                        There is currently a considerable need for joint research and discourse in this area. In view of the 
                        thematic focus, it is important to bring legal scholars and computer scientists, but also economists, 
                        into a joint discussion. For this reason, the members of the expert group are primarily recruited from 
                        these three disciplines. All members are eminent scholars, policy makers or industry leaders in their 
                        domain of expertise and have relevant experience with research in the decidedly interdisciplinary field 
                        at the interface of law and AI. The primary format for regular exchange is the annual conference, whose 
                        attendance is facultative for members. The aim is to publish the contributions of the participants in a 
                        collected volume, a conference report, or a policy white paper.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }