import React from 'react'
import { resumeDataType } from '../lib/ExperienceData'

interface myResumeProp {
    data : resumeDataType[]
}
const MyResumeEntries = ({data} : myResumeProp) => {
  return (
    <main>
       {
        data.map((iterate) => 
        <div key={iterate.id} className='grid grid-cols-2'>
            
            <h4>{iterate.duration}</h4>
            <div>
                <h4>{iterate.company}</h4>
            
                {
                    Array.isArray(iterate.details) ? 
                    iterate.details.map((d, index) => (
                        <p key={index}>{d}</p>
                    )) :
                    <p>{iterate.details}</p>

                }
            </div>

        </div>)
            }
    </main>
  )
}

export default MyResumeEntries
