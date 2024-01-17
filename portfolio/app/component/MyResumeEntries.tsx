import React from 'react'
import { resumeDataType } from '../lib/ExperienceData'

export interface myResumeProp {
    data : resumeDataType[]
}
const MyResumeEntries: React.FC<myResumeProp> = ({data}) => {
  return (
    <main>
       {
        data.map((iterate) => 
        <div key={iterate.id} className=' grid grid-cols-2 gap-4 p-5'>
            
            <div className='mt-2'>{iterate.duration}</div>
            <div>
                <h1 className='font-bold mb-2'>{iterate.company}</h1>
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