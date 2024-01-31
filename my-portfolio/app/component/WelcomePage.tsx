import React from "react";

const WelcomePage = () => {
    return(
        <main>
        
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:min-h-screen 
                        p-10 w-full h-full place-items-center">
            
            <div className="">
                <img
                    className="rounded-full"
                    style={{
                        width: '350px',
                        height: '350px',
                        objectFit: 'cover',
                        clipPath: 'ellipse(50% 80% at 50% 50%)',
                    }} 
                    src="/images/saqib-pic.jpg" alt="pic" />
            </div>
            
            <div>
                <div>
                    <h1 className="text-3xl font-semibold md:text-3xl mb-1">Saqib Murtaza</h1>
                    <p className="mt-1 mb-2 font-semibold text-teal-400 text-lg md:text-lg">A Bit About Me</p>
                </div>
                
                <div className="md:text-[18px]">
                    <p className="mb-5">
                        A multifaceted professional, I have successfully managed diverse teams, 
                        enhancing operational efficiency across various industries, with a background 
                        in administration and management.</p> 
                    <p>
                        I am further honing my skill set with a dedicated focus on web development 
                        and emerging technologies in the web3 and metaverse domains.
                    </p>     
                    <p className="mb-5"> 
                        I am seeking opportunities to contribute to projects that require a 
                        unique blend of my expertise in diverse fields .
                    </p>
                
                </div>
                
            </div>
      </div>

        </main>
    );
}
export default WelcomePage;