import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-950 py-4 ">
        <div className='ps-9 pe-16 flex space-x-5 items-center'>
            
            <div className='flex items-center text-teal-400 font-semibold text-sm space-x-3'>
                <div>Cell:</div>
                <div>
                <p>+92 317 193 8567</p>
                <p>+92 309 945 7645</p>
                </div>
            </div>
            
            <div className='flex items-center'>
                <p className='text-teal-400 font-semibold text-sm ml-36'>saqibmurtazakhan@gmail.com</p>
                <a className='ml-72 text-teal-400 font-semibold text-sm'
                href="https://www.linkedin.com/in/saqibmurtazakhan"
                target="_blank"
                rel="noopener noreferrer"><FaLinkedinIn />
                </a>
            </div>
            <div>
                
            </div>
        </div>
      
      </footer>
  );
};

export default Footer;
