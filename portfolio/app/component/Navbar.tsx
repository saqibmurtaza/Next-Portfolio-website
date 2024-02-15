import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <main className=' bg-teal-950 items-center text-teal-100'>
      <nav className="flex items-center justify-between relative w-full max-w-2xl mx-auto px-5 py-4">
       
        <div>
        <Link href={'/'} className="">Saqib Murtaza</Link>
        <p className='text-xs text-teal-400 font-bold'>Web 3.0 & Metaverse Student</p>
        </div>
       
        <div className='text-sm md:text-base'>
            <ul className="flex font-semibold space-x-3">
                <Link href={'/'}>Home</Link>
                <Link href={'/myblog'}>Blog</Link>
                <Link href={'/myresumepage'}>Resume</Link>
                <Link href={'/portfolio'}>Portfolio</Link>
            </ul>
        </div>
      </nav>
    
    </main>
  );
}

export default Navbar;
