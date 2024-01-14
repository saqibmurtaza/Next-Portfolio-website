import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-teal-950 ps-10 pt-2 pb-2">
        <div className='flex items-center justify-between md:flex md:pe-10'>
            
            <div className='flex items-center text-white space-x-3 md:flex-1'>
                <div>Cell:</div>
                <div>
                <p>+92 317 193 8567</p>
                <p>+92 309 945 7645</p>
                </div>
            </div>
            
            <div className='text-teal-400 flex flex-col items-center'>
              <h1>saqibmurtazakhan@gmail.com</h1>
              <Link href="https://www.linkedin.com/in/saqibmurtazakhan" 
              target="_blank"
              rel="noopener noreferrer">
              </Link>
              <div><FaLinkedinIn/></div>
            </div>
            <div>
                
            </div>
        </div>
      
      </footer>
  );
};

export default Footer;
