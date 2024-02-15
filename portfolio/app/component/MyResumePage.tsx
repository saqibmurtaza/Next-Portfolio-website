'use client'

import React from 'react'
import { additionalSkills, experienceData } from '../lib/ExperienceData';
import Link from 'next/link';
import MyResumeEntries from './MyResumeEntries';
import { educationData } from '../lib/EducationData';


const MyResumePage = () => {
     
    return (
    <main className='grid place-items-center '>
        <div className='prose bg-white border mb-3 p-5 shadow-lg'>
        
            <h2>Education</h2>
            
            <div>
                <MyResumeEntries data={educationData}/>
            </div>
            
            <h2>Experience</h2>

            <div>
                <MyResumeEntries data={experienceData}/>
            </div>

            <h2>Additional Skills</h2>
            
            <div>
                <MyResumeEntries data={additionalSkills}/>
                <div className='grid place-content-center md:place-content-end'>
                    <Link
                        href="/documents/resume.pdf"
                        target='{}'
                        rel='noopener noreferrer'>
                        <h1 className=' bg-teal-950 font-bold p-2 rounded-md 
                            shadow-md shadow-gray-400 text-teal-400 text-xs
                            hover:scale-105 transition duration-300'>Download Resume</h1>
                    </Link>
                </div>  
            </div>
        </div>

        
    </main>
  )
}

export default MyResumePage;
