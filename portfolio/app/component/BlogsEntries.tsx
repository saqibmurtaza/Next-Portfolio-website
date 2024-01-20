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
        
            object.map((iterate) =>
            <div key={iterate.id}>
              <div className='ps-9 pe-16 mb-5 mt-5'>
                <div className='block'>
                  <Link
                    href={`${iterate.link}`}
                    target='{_blank}'
                    rel="noopener noreferrer"
                    className='flex items-center space-x-5'>
                    <h1><FaMedium /></h1>
                    <h1>{iterate.heading}</h1>
                  </Link>
                </div>
                <div>{iterate.para}</div>
              </div>
            </div>
            )
        }
        
        
    </main>
    
  );
}

export default BlogsEntries;