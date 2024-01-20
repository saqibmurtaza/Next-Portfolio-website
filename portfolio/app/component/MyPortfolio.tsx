import React from 'react';

const MyPortfolio = () => {
  return (
    <main className='bg-teal-50 font-medium min-h-screen text-teal-950'>
      <div>
          <h1 className='heading-1'>Portfolio</h1>
      </div>
      <div className='pe-9 ps-9 pt-5'>
        <div>
          <h1 className='block'>Professional Journey Overview:</h1>
          <p className='para'>
              With a rich background spanning 15 years across diverse sectors, I&apos;ve amassed 
              valuable experience in management and administration. 
          </p>
          <p className='para'>
            This journey has equipped me with robust skills in leadership, strategic planning, 
            and project management.
          </p>
        </div>
        <div>
          <h1 className='block'>Current Exploration:</h1>
          <p className='para'>
            In my ongoing pursuit of knowledge and growth, I am currently immersed in the 
            dynamic fields of web 3 and the metaverse. 
          </p>
          <p className='para'>
              This journey represents my commitment to staying at the forefront of 
              technological advancements.
          </p>
        </div>
        <div>
        <h1 className='block'>Academic Progress</h1>
          <p className='para'>
            As of the second quarter of my academic journey, I&apos;ve covered foundational concepts 
            and practical applications of Typesrept & Next.js version 14.
          </p>
        <div>
          <h1 className='block'>Academic Projects</h1>
        <li className='font-bold'>Simple Command Line Calculator</li>
            <p className='para ps-5'>
            Developed a command-line calculator application using TypeScript, showcasing proficiency 
            in implementing basic arithmetic operations.
            </p>
          <li className='font-bold '>Number Guessing Game</li>
            <p className='para ps-5'>
            Designed and implemented a number guessing game with TypeScript, demonstrating problem-solving skills and user interaction in a console environment.
            </p>
          <li className='font-bold '>ATM Simulator</li>
            <p className='para ps-5'>
            Created an ATM simulation program using TypeScript, emphasizing logical structuring and understanding of financial systems.
            </p>
          <li className='font-bold '>Todo List Application</li>
            <p className='para ps-5'>
            Developed a TypeScript-based Todo List application, showcasing skills in task management and user interface design.
            </p>
          <li className='font-bold '>Student Management System</li>
            <p className='para ps-5'>
            Implemented a student management system with TypeScript, demonstrating data handling and organizational skills for educational scenarios.
            </p>
          <li className='font-bold '>Currency Converter</li>
            <p className='para ps-5'>
            Created a currency converter application in TypeScript, highlighting an understanding of data conversion and exchange rate calculations.
            </p>
        </div>
        <div>
          <h1 className='block'>Skills Acquired:</h1>
          <li className='font-bold '>Coding Proficiency:</li>
            <p className='para ps-5'>
              During my academic journey, I&apos;ve developed a Coding Proficiency & fluent in languages such
              as Javascript & Typescript
            </p>
          <li className='font-bold '>Web development skills</li>
            <p className='para ps-5'>
              I&apos;ve delved into Next.js, a powerful React framework. I&apos;ve acquired a solid 
              understanding of its capabilities, including server-side rendering and efficient routing. 
            </p>
            <p className='para ps-5'>
              Working with Next.js has not only streamlined my development workflow but has also 
              allowed me to create dynamic and performant web applications.
            </p>
            <p className='para ps-5'>
            This experience has deepened my expertise in modern web development and positioned 
            me to build robust, user-friendly interfaces.
            </p>
          </div>
        </div>
            
      </div>
      
    </main>
  )
}

export default MyPortfolio