import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Disclaimer() {

    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <div className="text-black flex-grow">
                <div className=' mb-10'>
                    <h2 className='flex justify-center font-bold text-4xl'>Disclaimer</h2>
                    <hr className="w-48 h-px mx-auto bg-black border-0 rounded my-2"/>
                </div>
                <div className="px-4 mx-auto lg:max-w-8xl text-justify md:flex md:px-32">
                    <p className='font-light'>
                    The opinions expressed and arguments employed herein are solely those of the authors and do not reflect the official views of RECSAI or its consortium members. The mere appearance of opinions and arguments on this website do not constitute an endorsement by RECSAI or its members of such content.                      
                    <br/>
                    <br/>
                    RECSAI does not make any representations or warranties with respect to the accuracy, applicability, fitness, or completeness of the content on this website. RECSAI cannot be held responsible for possible violations of copyright resulting from the posting of any written material on this website/blog.
                    <br/>
                    <br/>
                    The information provided on this website does not, and is not intended to, constitute legal, tax, investment, medical, or financial advice.  All information, content, and materials available on this website are for general information purposes only.  
                    <br/>
                    <br/>
                    Nothing contained on the site or other materials herein constitutes a solicitation, recommendation, endorsement, or offer by RECSAI.  RECSAI is not a fiduciary by virtue of any content on this website.  Information on this website may not constitute the most up to date legal or other information.  
                    <br/>
                    <br/>
                    This website contains links to other third-party websites.  Such links are only for the convenience of the read, user, or browser.  RECSAI and its members do not recommend or endorse the content of these third-party websites.  RECSAI is not responsible for any transmission received from any linked third-party website.
                    <br/>
                    <br/>
                    The fair use of any copyrighted work on this website for purposes such as comment, criticism, news reporting, teaching, scholarship, or research, is not an infringement of any copyright.  The site and content of the RECSAI website are and shall remain the property of RECSAI.  Trade names, trademarks, and services marks of RECSAI remain the intellectual property of RECSAI.
                    <br/>
                    <br/>
                    RECSAI hereby disclaims any and all liability to any party for any direct, indirect, implied, punitive, special, incidental, or other consequential damages arising directly or indirectly from any use of the content on this website, which is provided as is and without warranties.  You agree to indemnify, defend, and hold harmless RECSAI and is employees, officers, directors, partners, agents, representatives, suppliers, and service providers from any and all claims, losses, costs, and expenses of any kind, including attorneys fees.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
  }