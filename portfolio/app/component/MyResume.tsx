import React from 'react'
import { EducationData } from '../lib/EducationData'
import { experienceData, additionalSkill } from '../lib/ExperienceData'

const MyResume = () => {
     
    return (
    <main className='bg-teal-50 font-medium min-h-screen text-teal-950'>

        <div>
            <h1 className='heading-1'>Resume</h1>
        </div>
        <div className='border-b border-teal-200 mx-5'>
        {
            EducationData.map((e, index) => 
            <div className=' grid grid-cols-3 gap-4 p-5'>
                <div className='text-2xl'>
                    {
                        index === 0 ? <p>Education</p> : ''
                    }
                </div>
                <div className='mt-2'>{e.tenure}</div>
                <div className=''>
                    <h1 className='mb-2'>{e.title}</h1>
                    <p className=''>{e.details}</p>
                </div>

            </div>)
        }
        </div>
        <div className='border-b border-teal-200 mx-5'>
        {
            experienceData.map((ex, index) =>
            <div className='grid grid-cols-3 gap-4 p-5'>
                <div className='text-2xl'>
                    {index === 0 ? <p>Experience</p> : ''}
                </div>
                <div className=''>{ex.duration}</div>
                <div>
                    <h1 className='mb-2'>{ex.company}</h1>
                    <p>{ex.details}</p>
                </div>
                
            </div>)
        }
        </div>
        <div className='border-b border-teal-200 mx-5'>
        {
            additionalSkill.map((skill) => 
            <div className='grid grid-cols-3 gap-4 p-5'>
                <div className='text-2xl'>Additional Skills</div>
                <div>{skill.duration}</div>
                <div>
                    <h1 className='mb-2'>{skill.company}</h1>
                    <p>{skill.details}</p>
                </div>

            </div>
            )
        }    
        </div>
    </main>
  )
}

export default MyResume;