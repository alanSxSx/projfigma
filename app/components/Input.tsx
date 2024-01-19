'use client'
import React, { useState } from 'react'

export default function Input() {

    const [value, setValue] = useState<string>('');

  return (
    <input className="rounded-r-full" type="text" value={value} placeholder='Enter your email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
  )
}
