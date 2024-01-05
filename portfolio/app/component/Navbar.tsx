import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <section className='bg-teal-950 text-teal-100'>
      <nav className="border-b border-teal-200 flex p-5 items-center">
       
        <div className='grow'>
        <h1 className="font-extrabold mb-1 text-3xl">Saqib Murtaza</h1>
        <p className='mx-1 text-xs text-teal-400 font-bold'>Web 3.0 & Metaverse Student</p>
        </div>
       
        <div>
            <ul className="flex font-semibold space-x-4">
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/experience'}>Experience</Link>
                <Link href={'/resume'}>Resume</Link>
                <Link href={'/projects'}>Projects</Link>
            </ul>
        </div>
      </nav>
    
    </section>
  );
}

export default Navbar;