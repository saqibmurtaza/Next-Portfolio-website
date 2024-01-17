import React from 'react'
import { EducationData } from '../lib/EducationData'
import { experienceData, additionalSkill } from '../lib/ExperienceData'
import Link from 'next/link';

const MyResume = () => {
     
    return (
    <main className='bg-teal-50 font-medium min-h-screen text-teal-950'>

        <div className=''>
            <h1 className='heading-1'>Resume</h1>
        </div>
        
            <h1 className='text-2xl ps-9 pt-5'>Education</h1>
        
        <div className='border-b border-teal-200 mx-5'>

            {
                EducationData.map((e, index) => 
                <div className=' grid grid-cols-2 gap-4 p-5'>
                    
                    <div key={index} className='mt-2'>{e.tenure}</div>
                    <div className=''>
                        <h1 className='font-bold mb-2'>{e.title}</h1>
                        <p className=''>{e.details}</p>
                    </div>

                </div>)
            }
        </div>
            <h1 className='text-2xl ps-9 pt-5'>Experience</h1>

        <div className='border-b border-teal-200 mx-5'>
            
            {
                experienceData.map((ex, index) =>
                <div key={index} className='grid grid-cols-2 gap-4 p-5'>
                    <div className=''>{ex.duration}</div>
                    <div>
                        <h1 className='font-bold mb-2'>{ex.company}</h1>
                        {
                            Array.isArray(ex.details) ? (
                                ex.details.map((d, dIndex) => (
                                    <p key={dIndex}>{d}</p>
                                ))) :
                                <p>{ex.details}</p>
                        }
                        
                    </div>
                    
                </div>)
            }
        </div>
            <h1 className='text-2xl ps-9 pt-5'>Additional Skills</h1>
        
        <div className='border-b border-teal-200 mx-5'>
            
            {
                additionalSkill.map((skill, index) => 
                <div key={index} className='border-b grid grid-cols-2 gap-4 p-5'>
                    
                    <div>{skill.duration}</div>
                    <div>
                        <h1 className='font-bold mb-2'>{skill.company}</h1>
                        {
                            Array.isArray(skill.details) ?
                            (skill.details.map((d, dIndex) => (
                                <p key={dIndex}>{d}</p>
                            ))) :
                            (
                                <p>{skill.details}</p>
                            )
                        }
                    </div>

                </div>
                )
            }
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

export default MyResume;
