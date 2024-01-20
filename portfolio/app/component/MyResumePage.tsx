'use client'

import React from 'react'
import { additionalSkills, experienceData } from '../lib/ExperienceData';
import Link from 'next/link';
import MyResumeEntries from './MyResumeEntries';
import { educationData } from '../lib/EducationData';


const MyResumePage = () => {
     
    return (
    <main className='bg-teal-50 font-medium min-h-screen text-teal-950'>

        <div className=''>
            <h1 className='heading-1'>Resume</h1>
        </div>
        
            <h1 className='text-2xl ps-9 pt-5'>Education</h1>
        
        <div className='border-b border-teal-200 mx-5'>
            <MyResumeEntries data={educationData}/>
        </div>
            <h1 className='text-2xl ps-9 pt-5'>Experience</h1>

        <div className='border-b border-teal-200 mx-5'>
            <MyResumeEntries data={experienceData}/>
        </div>
            <h1 className='text-2xl ps-9 pt-5'>Additional Skills</h1>
        
        <div className='border-b border-teal-200 mx-5'>
            <MyResumeEntries data={additionalSkills}/>
            <div className='grid place-content-center md:place-content-end'>
                <Link
                    href="/documents/resume.pdf"
                    target='{}'
                    rel='noopener noreferrer'>
                    <h1 className=' bg-teal-950 font-bold max-w-fit mt-3 mb-3 p-2 rounded-md 
                        shadow-md shadow-gray-400 text-teal-400 text-xs
                        hover:scale-105 transition duration-300'>Download Resume</h1>
                </Link>
            </div>  
        </div>
    </main>
  )
}

export default MyResumePage;
