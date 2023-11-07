import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="text-black flex-grow">
        <div className="w-full mb-10">
          <h2 className="flex justify-center font-bold text-4xl">About Us</h2>
          <hr className="w-48 h-px mx-auto bg-black border-0 rounded my-2" />
        </div>
        <div className="px-4 mx-auto lg:max-w-8xl md:flex md:px-32">
          <p className="font-light text-justify">
            International Expert Consortium on the Regulation, Computer Science
            and Economics of AI (RECSAI) brings together thought leaders from
            around the world to evaluate the broad technical and legal
            implications of advances in generative and other AI systems. RECSAI
            facilitates an interdisciplinary exchange of ideas and scholarship,
            as well as the organization of events around the world. At the same
            time, RECSAI coordinates and advances transatlantic,
            analytically-grounded policy advice in the area of large-scale AI
            models. Against this background, RECSAI has three specific goals.
            <br />
            <br />
            First, the European, US, and broader global regulatory architecture
            for large generative AI models such as ChatGPT will be examined,
            critically analyzed and discussed. While the initial focus may be on
            the US and the EU, eventually, all continents and major regions of
            the world will be represented.
            <br />
            <br />
            Second, proposals for optimizing regulation may be developed. These
            proposals could potentially shape the legislative process in various
            regions of the world, as well as on the global stage.
            <br />
            <br />
            Third, RECSAI will work to intensify the transatlantic and global
            exchange on AI regulation. This objective is particularly important
            against the background of global AI regulation initiatives, for
            example at the United Nations.
            <br />
            <br />
            Ultimately, RECSAI will create a collaborative and productive expert
            community that connects and inspires preeminent researchers, policy
            makers, and industry leaders in AI and regulation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
