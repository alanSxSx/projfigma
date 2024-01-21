'use client'
import React, { useState } from 'react'

export default function Input() {

    const [value, setValue] = useState<string>('');

  return (
    <div className='flex w-full'>
    <input className="rounded-full relative top-100 p-4 w-96" type="text" value={value} placeholder='Enter your email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
    <button className="relative right-6 w-32 bg-black text-white rounded-3xl border border-slate-400">Get a Quote</button>
    </div>
  )
}
