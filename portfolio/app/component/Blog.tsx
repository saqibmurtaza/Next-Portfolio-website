'use client'

import Link from 'next/link';
import React from 'react'
import { FaMedium } from "react-icons/fa6";
import ScrollToSection from './ScrollToSection';
import { career, emailMarketing, freelancing, health, interior, 
          online, socialMedia, technology } from '../lib/BlogData';
import BlogsEntries from './BlogsEntries';
import Navbar from './Navbar';

const Blog = () => {

  return (
      
    <main className='bg-teal-50 font-medium text-teal-950 '>
      
      <div className='pe-9 ps-9 pt-5'>
        <p className='mb-2'>Explore a diverse range of insightful articles in my Blog section, 
          where I share perspectives on career development, health and fitness, writing, 
          technology, and more. 
        </p>
        <p>
          Each post is crafted to inspire and inform, offering valuable insights into various 
          aspects of life and learning.
        </p>
        <p>
          Join me on this journey of exploration and discovery through engaging and thought-provoking 
          content.
        </p>
      </div>
      <div className='mt-5 pe-9 ps-9'>
        <h2 className='heading-2'>Blog Categories</h2>
        <div className='categories grid grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4'>
          
          <Link className='buttons' 
            href={'#'} id='1' 
            onClick={() => ScrollToSection('career')}>Career and Job Seeking
          </Link>
          <Link className='buttons ' 
            href={'#'} id='2' 
            onClick={() => ScrollToSection('health')}>Health and Fitness
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
      </div>
      
      <div className='BlogEntries mt-5'>
        <div id='career' className='heading-2'>
          Career & Job Seeking
        </div>
        <div>
          <BlogsEntries object={career}/>{/*component BlogEntries -passing prop with value 0bject=career*/}
        </div>
        
        <div>
        <div id='health' className='heading-2'>
          Health and Fitness
        </div>
           <BlogsEntries object={health}/>
          </div>
        </div>
     
          <div id='social' className='heading-2'>
            Social Media and Online Presence
          </div>
          <div>
            <BlogsEntries object={socialMedia}/>
          </div>

          <div id='technology' className='heading-2'>
            Technology and Web Hosting
          </div>
          <div>
            <BlogsEntries object={technology}/>
          </div>
        
          <div id='home' className='heading-2'>
            Home and Interior Design
          </div>
          <div>
            <BlogsEntries object={interior}/>
          </div>
      
          <div id='business' className='heading-2'>
            Business and Online Income
          </div>
          <div>
            <BlogsEntries object={online}/>
          </div>
      
          <div id='marketing' className='heading-2'>
            Digital Marketing and Email
          </div>
          <div>
            <BlogsEntries object={emailMarketing}/>
          </div>
      
          <div id='freelancing' className='heading-2'>
            Freelancing and Working from Home
          </div>
          <div>
            <div>
            <BlogsEntries object={freelancing}/>
          </div>
        
        </div>
    </main>
  )
}

export default Blog;