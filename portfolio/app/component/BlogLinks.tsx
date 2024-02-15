import React from 'react'
import Link from 'next/link'
import ScrollToSection from './ScrollToSection'

const BlogLinks = () => {
  return (
    <main className='prose border bg-white ps-9 pe-9 pt-5 pb-5 rounded-lg shadow-lg'>
        <h2 className=''>Blog Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
          <Link className='buttons not-prose' 
            href={'#'} id='career1' 
            onClick={() => ScrollToSection('career')}>Career and Job Seeking
          </Link>
          <Link className='buttons not-prose ' 
            href={'#'} id='health&2' 
            onClick={() => ScrollToSection('health&')}>Health and Fitness
          </Link>
          <Link className='buttons not-prose'
            href={'#'} id='social3'
            onClick={() => ScrollToSection('social')}>Social Media and Online Presence
          </Link>
          <Link className='buttons not-prose ' 
            href={'#'} id='technology4' 
            onClick={() => ScrollToSection('technology')}>Technology and Web Hosting
          </Link>
          <Link className='buttons not-prose' 
            href={'#'} id='home5' 
            onClick={() => ScrollToSection('home')}>Home and Interior Design
          </Link>
          <Link className='buttons not-prose ' 
            href={'#'} id='business6' 
            onClick={() => ScrollToSection('business')}>Business and Online Income
          </Link>
          <Link className='buttons not-prose' 
            href={'#'} id='marketing7' 
            onClick={() => ScrollToSection('marketing')}>Digital Marketing and Email
          </Link>
          <Link className='buttons not-prose' 
            href={'#'} id='freelancing8' 
            onClick={() => ScrollToSection('freelancing')}>Freelancing and Working from Home
          </Link>
        </div>
    </main>
  )
}

export default BlogLinks;