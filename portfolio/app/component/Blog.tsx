'use client'

import React from 'react'
import { career, career2, emailMarketing, emailMarketing2, emailMarketing3, freelancing, freelancing2, health, interior, 
          interior2, 
          interior3, 
          online, socialMedia, technology } from '../lib/BlogData';
import BlogsEntries from './BlogsEntries';
import BlogLinks from './BlogLinks';


const Blog = () => {

  return (
      
    <main className='grid gap-1 place-items-center mb-2'>
      
      <div className='prose border pe-9 ps-9 pt-5 pb-5 shadow-lg'>
        <p className=''>Explore a diverse range of insightful articles in my Blog section, 
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
      
      {/*BLOG CATEGORIES */}
    
      <div className=''>
        <BlogLinks/>
      </div>
      
      <div className='prose border grid grid-cols-1 md:grid-cols-2 gap-2 p-2 shadow-lg'>
        
        <div id='career'>
          <BlogsEntries object={career}/>
        </div>
        
        <div id='career' >
          <BlogsEntries object={career2}/>
        </div>
        
        <div id='health&' >
          <BlogsEntries object={health}/>
        </div>
              
        <div id='social' >
          <BlogsEntries object={socialMedia}/>
        </div>

        <div  id='technology' >
          <BlogsEntries object={technology}/>
        </div>

        <div id='home' >
          <BlogsEntries object={interior}/>
        </div>
        <div id='home' >
          <BlogsEntries object={interior2}/>
        </div>
        <div id='home'>
          <BlogsEntries object={interior3}/>
        </div>

        <div id='business' >
          <BlogsEntries object={online}/>
        </div>

        <div id='marketing' >
          <BlogsEntries object={emailMarketing}/>
        </div>
        <div id='marketing'>
          <BlogsEntries object={emailMarketing2}/>
        </div>
        <div id='marketing' >
          <BlogsEntries object={emailMarketing3}/>
        </div>

        <div id='freelancing' >
          <BlogsEntries object={freelancing}/>
        </div>
        <div id='freelancing' >
          <BlogsEntries object={freelancing2}/>
        </div>

      </div>
    </main>
  )
}

export default Blog;