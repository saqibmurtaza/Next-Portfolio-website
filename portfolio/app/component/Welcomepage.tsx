import React from "react";
import Image from "next/image";


const WelcomePage = () => {
    return(
        <main className="grid place-items-center">
            
            <div className="prose grid grid-cols-1 p-5 md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        src="/images/saqib-pic.jpg"
                        alt="my Pic"
                        width={1000}
                        height={1000}
                        className="rounded-full h-[38rem] md:w-[18rem] md:h-[18rem]"
                    />
                </div>
                <div>
                    <h1 className="">Saqib Murtaza</h1>
                    <h3 className="font-bold text-teal-400">A Bit About Me</h3>
                    <p className="">
                        A multifaceted professional, I have successfully managed diverse teams, 
                        enhancing operational efficiency across various industries, with a background 
                        in administration and management.</p> 
                    <p>
                        I am further honing my skill set with a dedicated focus on web development 
                        and emerging technologies in the web3 and metaverse domains.
                    </p>     
                    <p className=""> 
                        I am seeking opportunities to contribute to projects that require a 
                        unique blend of my expertise in diverse fields .
                    </p>
                </div>
                
                
            </div>
      

        </main>
    );
}
export default WelcomePage;