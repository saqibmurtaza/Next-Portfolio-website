import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <section className='bg-teal-950 fixed top-0 items-center w-full md:w-full md:ps-10 pe-10 pt-2 pb-2 text-teal-100'>
      <nav className="border-teal-200 flex flex-col md:flex-row items-center  ">
       
        <div className=' flex-1 text-center md:text-left'>
        <Link href={'/'} className="font-extrabold mb-1 text-lg md:text-3xl">Saqib Murtaza</Link>
        <p className='text-xs text-teal-400 font-bold'>Web 3.0 & Metaverse Student</p>
        </div>
       
        <div className='text-sm md:text-base'>
            <ul className="flex font-semibold space-x-3">
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/resume'}>Resume</Link>
                <Link href={'/portfolio'}>Portfolio</Link>
            </ul>
        </div>
      </nav>
    
    </section>
  );
}

export default Navbar;
