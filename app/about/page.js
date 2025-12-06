import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 mb-30">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">About Us</h1>

      <div className="bg-purple-100 p-8 rounded-2xl shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-purple-700">ZiplyURL</span>, 
          your clean and minimal URL shortener built for speed and simplicity.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Long, messy URLs make sharing harder so we created a tool that keeps things effortless.
          No distractions, no ads, no complications. Just fast and reliable link shortening.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're a creator, student, developer, or business owner, 
          <span className="text-purple-700 font-semibold"> ZiplyURL</span> helps you share links
          with confidence and style.
        </p>
      </div>
    </div>
  )
}

export default About
