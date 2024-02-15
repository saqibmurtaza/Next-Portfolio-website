import Link from 'next/link';
import React from 'react';

const MyPortfolio = () => {
  return (
    <main className='grid gap-2 mb-5 min-h-screen place-items-center'>
      
      <div className='portfolio'>
        <h3>Welcome to My Portfolio!</h3>
        <h3>Professional Journey Overview:</h3>
        <p>
          With a rich background spanning 15 years across diverse sectors, I&apos;ve amassed 
          valuable experience in management and administration.
        </p>
        <p>
          This journey has equipped me with robust skills in leadership, strategic planning, 
          and project management.
        </p>
      </div>
      <div className='portfolio'>
        <h3>Current Exploration:</h3>
        <p>
          In my ongoing pursuit of knowledge and growth, I am currently immersed in the 
          dynamic fields of web 3 and the metaverse. 
        </p>
        <p>
          This journey represents my commitment to staying at the forefront of 
          technological advancements.
        </p>
      </div>
      <div className='portfolio'>
        <h3>Academic Progress:</h3>
        <p>
          As of the second quarter of my academic journey, I&apos;ve covered foundational concepts 
          and practical applications of Typesrept & Next.js version 14.
        </p>
      </div>
      <div className='portfolio'>
        <h3>Skills Acquired:</h3>
        <h4>Coding Proficiency:</h4>
        <p>
          During my academic journey, I&apos;ve developed a Coding Proficiency & fluent in languages such
          as Javascript & Typescript
        </p>
        <h4>Web development skills:</h4>
        <p>
          I&apos;ve delved into Next.js, a powerful React framework. I&apos;ve acquired a solid 
          understanding of its capabilities, including server-side rendering and efficient routing.
        </p>
        <p>
          Working with Next.js has not only streamlined my development workflow but has also 
          allowed me to create dynamic and performant web applications.
        </p>
        <p>
          This experience has deepened my expertise in modern web development and positioned 
          me to build robust, user-friendly interfaces.
        </p>
      </div>
      <div className='portfolio'>
        <h3>My Projects!</h3>
        
        <p>I specialize in creating dynamic and interactive websites using Next.js 14, 
          along with CMS platforms like Contentful and Sanity.<br/>Explore my projects below:</p>
        
        <Link href={`https://sanityblogwebsite.vercel.app/`}
          target='{_blank}'
          rel='noopener noreferrer'>
          <h4 className='text-blue-800'>Sanity Blog Website</h4>
        </Link>
        
        <p>Experience the power of Next.js and Sanity CMS in action. This project showcases 
          my expertise in building fast and customizable web applications with rich content 
          management capabilities.
        </p>
        <Link href={``}
          target='{_blank}'
          rel='noopener noreferrer'>
          <h4 className='text-blue-800'>Conterntful Blog Websie</h4>
        </Link>
        <p>
        Dive into the world of content-driven websites with this Next.js project integrated 
        with Contentful CMS. Discover seamless content updates and effortless scalability.
        </p>
      </div>
    </main>
  )
}

export default MyPortfolio