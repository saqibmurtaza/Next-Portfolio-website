import React from 'react'
import Link from 'next/link';
import { FaMedium } from "react-icons/fa6";
import { BlogEntry } from '../lib/BlogData';
import Image from 'next/image';

interface BlogsEntriesProps {
  object: BlogEntry[];
}

const BlogsEntries : React.FC<BlogsEntriesProps> = ({object}) => {
  return (
    <main>
        {
          object.map((iterate) =>
            <div className='' key={iterate.id}>
              <Image src={iterate.image} alt='pic'
              width={500} height={500}
              className="rounded-t-lg h-[200px] object-cover"
              />
              <h4 className='line-clamp-1'>{iterate.heading}</h4>
              <p className=' line-clamp-2'>
                {iterate.para}
              </p>
              <Link
                href={`${iterate.link}`}
                target='{_blank}'
                rel="noopener noreferrer"
                className='flex items-center space-x-5'>
                <button className='buttons flex space-x-5 place-items-center w-full'>
                  <span><FaMedium /></span>
                  <span>Read more</span>
                </button>
              </Link>
            </div>
          )
        }
        
        
    </main>
    
  );
}

export default BlogsEntries;