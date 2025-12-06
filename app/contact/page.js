"use client"
import React, { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-6">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        Contact Us
      </h1>

      <div className="bg-purple-100 p-10 rounded-2xl shadow-md">
        <form className="flex flex-col gap-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 bg-white border border-purple-300 rounded-lg focus:outline-purple-600"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 bg-white border border-purple-300 rounded-lg focus:outline-purple-600"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 bg-white border border-purple-300 rounded-lg focus:outline-purple-600"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="button"
            className="bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
