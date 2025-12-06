"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url,seturl]=useState("")
    const [shorturl,setShorturl]=useState("")
    const [generated,setGenerate]=useState(false)
const generate=()=>{
  const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
            
        });
        console.log("Generated link:", `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
console.log("Environment:", process.env.NEXT_PUBLIC_HOST);


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
            setGenerate(`${window.location.origin}/${shorturl}`)

                seturl("")   
                setShorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));

}
  return (
    <div className='max-w-xl mx-auto py-20 px-6 mb-30'>
     <h1 className="text-4xl font-bold mb-8 text-purple-700">Generate your Short URLs</h1>
    
       
      <div className='bg-purple-100 flex flex-col gap-2 p-8 rounded-2xl shadow-md"'>
        <input type='text' 
        value={url}
         className='px-5 py-2 bg-white focus:outline-purple-600' 
        placeholder='Enter your URL' 
        onChange={e=>{seturl(e.target.value)}}/>

        <input type='text'
        value={shorturl}
        className='px-4 py-2 bg-white  focus:outline-purple-600' 
        placeholder='Enter your preferred short URL text' onChange={e=>{setShorturl(e.target.value)}}/>
        <button onClick={generate} className='bg-purple-500 shadow-lg rounded-lg px-4 py-1 my-3 font-bold text-white'>Generate</button>
      </div>
      {generated && <><span className='text-lg font-bold text-purple-700'>Your Link:</span> <code><Link target='_blank' href={generated}>{generated}</Link>
        </code> </>}
    </div>
  )
}

export default Shorten
