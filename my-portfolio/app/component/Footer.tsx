import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-teal-950 ps-10 pt-2 pb-2 text-teal-400">
      <div className='grid grid-cols-3 items-center'>
        
        <div className='grid place-items-start'>
          <p>+92 317 193 8567</p>
          <p>+92 309 945 7645</p>
        </div>
        
        <div className='flex'>
          <h1>saqibmurtazakhan@gmail.co</h1>
        </div>
        <div className='grid place-items-center'>
          <div>
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
