import React from 'react'
import { career } from '../lib/BlogData';
import Link from 'next/link';
import { FaMedium } from "react-icons/fa6";

interface BlogEntry {
    link: string;
    heading: string;
    para: string;
  }
  
  interface BlogsEntriesProps {
    object: BlogEntry[];
  }

const BlogsEntries : React.FC<BlogsEntriesProps> = ({object}) => {
  return (
    <main>
        {
        
            object.map((cr, index) =>
            <div>
              <div className='ps-9 pe-16 mb-5 mt-5'>
                <div className='block-1 px-4 py-2 my-2 bg-teal-50 text-teal-950 
                rounded-md transition duration-300 transform hover:scale-105 hover:shadow-md hover:text-teal-700'>
                  <Link key={index}
                    href={`${cr.link}`}
                    target='{}'
                    rel="noopener noreferrer"
                    className='flex items-center space-x-5'>
                    <h1><FaMedium /></h1>
                    <h1 key={index}>{cr.heading}</h1>
                  </Link>
                </div>
                <div key={index}>{cr.para}</div>
              </div>
            </div>
            )
        }
        
        
    </main>
    
  );
}

export default BlogsEntries;