import React from 'react'
import Link from 'next/link'
import ScrollToSection from './ScrollToSection'

const Links = () => {
  return (
    <main>
        <div className='categories grid grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4'>
          
          <Link className='buttons' 
            href={'#'} id='1' 
            onClick={() => ScrollToSection('career')}>Career and Job Seeking
          </Link>
          <Link className='buttons ' 
            href={'#'} id='2' 
            onClick={() => ScrollToSection('health&')}>Health and Fitness
          </Link>
          <Link className='buttons'
            href={'#'} id='3'
            onClick={() => ScrollToSection('social')}>Social Media and Online Presence
          </Link>
          <Link className='buttons ' 
            href={'#'} id='4' 
            onClick={() => ScrollToSection('technology')}>Technology and Web Hosting
          </Link>
          <Link className='buttons' 
            href={'#'} id='5' 
            onClick={() => ScrollToSection('home')}>Home and Interior Design
          </Link>
          <Link className='buttons ' 
            href={'#'} id='6' 
            onClick={() => ScrollToSection('business')}>Business and Online Income
          </Link>
          <Link className='buttons md:col-span-2 lg:col-span-1' 
            href={'#'} id='7' 
            onClick={() => ScrollToSection('marketing')}>Digital Marketing and Email
          </Link>
          <Link className='buttons' 
            href={'#'} id='8' 
            onClick={() => ScrollToSection('freelancing')}>Freelancing and Working from Home
          </Link>
        </div>
    </main>
  )
}

export default Links