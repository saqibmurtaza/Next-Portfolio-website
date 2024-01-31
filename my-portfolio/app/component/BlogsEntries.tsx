import React from 'react'
import Link from 'next/link';
import { FaMedium } from "react-icons/fa6";
import { BlogEntry } from '../lib/BlogData';

interface BlogsEntriesProps {
  object: BlogEntry[];
}

const BlogsEntries : React.FC<BlogsEntriesProps> = ({object}) => {
  return (
    <main>
        {
        
            object.map((cr) =>
            <div key={cr.id}>
              <div className='ps-9 pe-16 mb-5 mt-5'>
                <div className='block-1 px-4 py-2 my-2 bg-teal-50 text-teal-950 
                rounded-md transition duration-300 transform hover:scale-105 
                hover:shadow-md hover:text-teal-700'>
                  <Link
                    href={`${cr.link}`}
                    target='{_blank}'
                    rel="noopener noreferrer"
                    className='flex items-center space-x-5'>
                    <h1><FaMedium /></h1>
                    <h1>{cr.heading}</h1>
                  </Link>
                </div>
                <div>{cr.para}</div>
              </div>
            </div>
            )
        }
        
        
    </main>
    
  );
}

export default BlogsEntries;