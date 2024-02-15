import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-teal-400">
      <div className='flex flex-wrap items-center justify-around max-w-2xl mx-auto relative'>
        
        <div className='text-xs md:text-sm'>
          <p>+92 317 193 8567</p>
          <p>+92 309 945 7645</p>
        </div>
        
        <div>
          <h1>saqibmurtazakhan@gmail.co</h1>
        </div>

        <div>
          <div className='text-sm md:text-base'>
            <Link 
              href={'https://www.linkedin.com/in/saqibmurtazakhan/'}
              target='{}'
              rel="noopener noreferrer">
              <div className='flex items-center space-x-2'>
                <p>LinkedIn</p>
                <FaLinkedinIn/>
              </div>
            </Link>
          </div>
          
        </div>
      </div>    
    </footer>
  );
};

export default Footer;
