'use client'

import Link from 'next/link';
import React from 'react'
import { FaMedium } from "react-icons/fa6";
import ScrollToSection from './ScrollToSection';
import { career, emailMarketing, freelancing, health, interior, online, socialMedia, technology } from '../lib/BlogData';
import BlogsEntries from './BlogsEntries';
import Navbar from './Navbar';

const Blog = () => {
  
    return (
        
      <main className='bg-teal-50 font-medium min-h-screen text-teal-950 '>
        
        <div className='pe-16 ps-9 pt-5'>
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
        <div className='mt-5 ps-9 '>
          <h1 className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
              hover:text-teal-700 hover:shadow-md transition transform 
              text-center text-xl text-teal-600 font-extrabold'>Blog Categories</h1>
          <div className='categories flex space-x-5'>
              
            <div>
            <a className='rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400' 
            href={'#'} id='1' 
            onClick={() => ScrollToSection('1')}>Career and Job Seeking
            </a>
            
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400 ' 
            href={'#'} id='2' 
            onClick={() => ScrollToSection('2')}>Health and Fitness
            </a>
            
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400 ' 
            href={'#'} id='3' 
            onClick={() => ScrollToSection('3')}>Writing and Freelancing
            </a>
            </div>
            
            <div>
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400  text-center'
            href={'#'} id='4'
            onClick={() => ScrollToSection('4')}>Social Media and Online Presence
            </a>
            
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400 ' 
            href={'#'} id='5' 
            onClick={() => ScrollToSection('5')}>Technology and Web Hosting
            </a>
            
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400 ' 
            href={'#'} id='6' 
            onClick={() => ScrollToSection('6')}>Home and Interior Design
            </a>
            </div>

            <div>
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400 ' 
            href={'#'} id='7' 
            onClick={() => ScrollToSection('7')}>Business and Online Income
            </a>
            
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400 ' 
            href={'#'} id='8' 
            onClick={() => ScrollToSection('8')}>Digital Marketing and Email
            </a>
            
            <a className='w-auto rounded-md duration-300 hover:shadow-gray-400 shadow-gray-400 shadow-md hover:scale-x-100 
            hover:text-teal-950 hover:bg-teal-400 hover:shadow-md transition transform
            flex items-center p-3 bg-teal-950 m-2 text-teal-400  text-center' 
            href={'#'} id='9' 
            onClick={() => ScrollToSection('9')}>Freelancing and Working from Home
            </a>
            </div>
          
          </div>
        
        </div>
        <div>
        <div id='1' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold '>
          Career & Job Seeking
        </div>
        <BlogsEntries object={career}/>
        </div>
        <div>
        <div id='2' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Health and Fitness
        </div>
        <BlogsEntries object={health}/>
        </div>
        <div>
        <div id='4' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Social Media and Online Presence
        </div>
        <BlogsEntries object={socialMedia}/>
        </div>
        <div>
        <div id='5' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Technology and Web Hosting
        </div>
        <BlogsEntries object={technology}/>
        </div>
        <div>
        <div id='6' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Home and Interior Design
        </div>
        <BlogsEntries object={interior}/>
        </div>
        <div>
        <div id='7' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Business and Online Income
        </div>
        <BlogsEntries object={online}/>
        </div>
        <div>
        <div id='8' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Digital Marketing and Email
        </div>
        <BlogsEntries object={emailMarketing}/>
        </div>
        <div>
        <div id='9' className='mt-5 my-2 ps-9 pe-16 mx-10 py-2 rounded-md duration-300 hover:scale-105
         hover:text-teal-700 hover:shadow-md transition transform 
         text-center text-xl text-teal-600 font-extrabold'>
          Freelancing and Working from Home
        </div>
        <BlogsEntries object={freelancing}/>
        </div>
        
      </main>
    
  )
}

export default Blog;