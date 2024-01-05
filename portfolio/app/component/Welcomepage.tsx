import React from "react";

const WelcomePage = () => {
    return(
        <main>
        
        <div className="flex items-center ml-5 pt-10 pb-10 space-x-20">
            
            <div className="overflow-hidden rounded-full w-96 h-96">
                <img
                className="w-full h-full object-left" 
                src="/images/saqib-pic.jpg" alt="pic" />
            </div>
            
            <div className='Text w-96'>
                <h1 className="text-3xl font-semibold">Saqib Murtaza</h1>
                <p className="mt-1 font-semibold text-teal-400 text-lg">A Bit About Me</p>
                <p className="">
                    A multifaceted professional, I have successfully managed diverse teams, 
                    enhancing operational efficiency across various industries, with a background 
                    in administration and management.</p> 
                <p>
                    I am further honing my skill set with a dedicated focus on web development 
                    and emerging technologies in the web3 and metaverse domains.
                </p>     
                <p> 
                    I am seeking opportunities to contribute to projects that require a 
                    unique blend of my expertise in diverse fields .
                </p>
            </div>
      </div>

        </main>
    );
}
export default WelcomePage;