import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'

export default function Menu() {
	return (
		<div className='flex justify-around w-full bg-slate-100 rounded-full p-4'>
			<div className='w-20 flex justify-center items-center'>
			<Image src='/Logo.png' alt='Logo' width={500} height={500} />
			</div>
			<Navbar/>
			<Link href="#" className='flex justify-center items-center'>Other services</Link>
			<Button Nome='Contact Us'/>
		</div>
	)
}
