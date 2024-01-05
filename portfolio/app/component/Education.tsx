import React from 'react'

const Education = () => {
  const educationData =[
    {
        title: 'MBA in Finance',
        tenure: '1993 to 1995',
        details: 'MBA at the Philippines Christian University, led impactful projects, including a PVC cable industry feasibility study and strategic planning for a marriage hall.'
    },
    {
        title: 'B.Sc in Mathematics and Physics',
        tenure: '1987 to 1989',
        details: 'Edwards College - Peshawar, PK'
    },
    {
        title: 'SSC in General Sciences',
        tenure: '1985 to 1987',
        details: 'Peshawar Public School & College - Peshawar, PK'
    }
  ]
  const experience = [
    {
        company : ' PIAIC -Certified AI, Metaverse, and Web 3.0 Developer & Solopreneur | Student',
        duration : 'Jul 2023 - Present',
        details : 'Pursuing advanced studies in web3 and metaverse technologies, with expected completion of course in June 2024. Developing a strong foundation in decentralized applications, blockchain, and immersive digital experiences.'
    },
    {
        company : 'Murtaza Sons Stationers | Business Owner, Peshawar',
        duration: 'Jan 2017 - Dec 2021',
        details : "As the owner and manager of a family stationery business, I successfully oversaw day-to-day operations, inventory management, and customer relations. Implemented cost-effective strategies that led to a 30 % increase in profit margins over a two-year period. Developed and maintained relationships with suppliers, optimized stock levels, and introduced new product lines to meet evolving customer demands. Demonstrated strong leadership and decision-making skills while navigating challenges and ensuring the business's sustained growth."
    },
    {    
        company : 'Hitech Network Private Limited | Coordinator Peshawar',
        duration: 'Jul 2011 - Dec 2016',
        details : 'Managed coordination between departments, fostering effective communication and alignment of goals. Assisted in project planning and execution, ensuring timely completion and quality deliverables.'
    },
    {
        company : 'Nokia Siemens Network (NSN) | Coordinator & Data Analyst Islamabad',
        duration: 'Apr 2010 - Jun 2011',
        details : 'Coordinated projects, gathered and analyzed data, and prepared insightful reports to support decision-making. Contributed to process improvement by identifying bottlenecks and suggesting solutions.'
    },
    {
        company : 'Electronic Network Services (ENS) | Manager Administration, Islamabad',
        duration: 'Dec 2006 - Mar 2010',
        details : 'Lead administrative functions, overseeing facilities, procurement, and resource management. Developed and implemented policies to enhance organizational efficiency and employee satisfaction.'
    },
    {
        company : 'Network Leasing Corporation Pvt Ltd. | Branch Manager, Peshawar',
        duration: 'Jun 1996 -  Sep 2006',
        details : 'Successfully managed branch operations, leading a team to achieve sales targets and enhance customer satisfaction. Implemented strategic initiatives that resulted in increased profitability and market share.'
    },
  
    ]
    const additionalSkill = [
        {
            company : 'Mathematics Tutor (Part-time)',
            duration : 'Since 2013 to present',
            details : 'Utilized teaching skills to educate and mentor students in mathematics for the past 10 years.'
        }
    ]
    return (
    <main className='bg-teal-50 font-medium min-h-screen text-teal-950'>

        <div>
            <h1 className='border-b border-teal-200 h-16 pt-3 ps-9 text-3xl font-bold'>Resume</h1>
        </div>
        <div className='border-b border-teal-200 mx-5'>
        {
            educationData.map((e, index) => 
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
            experience.map((ex, index) =>
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

export default Education