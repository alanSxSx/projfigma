import React from 'react'
import Input from './Input'
import Button from './Button'

export default function TextMain1() {
  return (
    <div className='w-1/3 h-full flex flex-col justify-center pl-20'>
    <h3 className='text-base pb-4 font-bold'>Welcome to Realstate</h3>
    <h1 className='text-7xl pb-4 font-bold'>Manage Your Property</h1>
    <h3 className='text-base pb-4 font-bold'>Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</h3>
    <div className='pt-4'>
    <Input/>
    </div>
    </div>
  )
}
