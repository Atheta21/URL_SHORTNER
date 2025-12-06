import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white">
      <div className="logo font-bold text-2xl">
        <Link href="/">ZiplyURL</Link>
      </div>

      <ul className="flex justify-center gap-6 items-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shorten">Shorten</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>

        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-lg rounded-lg px-4 py-1 font-bold">
              Try Now
            </button>
          </Link>

          <Link href="/github">
            <button className="bg-purple-500 shadow-lg rounded-lg px-4 py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

