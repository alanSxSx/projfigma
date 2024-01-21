import React from 'react'
import TitleMain from '../components/TitleMain'
import Image from 'next/image'

export default function Main4() {
	return (
		<div className='w-full flex flex-col justify-center items-center pt-16'>
			<TitleMain title="We are a global, boutique real estate brokerage"/>
			<div className='w-full flex justify-center items-center'>
			<div className='flex justify-center items-start flex-col w-4/6 px-60'>
					<div className='text-4xl font-bold pb-4'>The transfer of real estate</div>
					<div>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.</div>
					<div className='flex py-8'>
						<button className='flex justify-center items-center w-32 bg-black text-white rounded-3xl border border-slate-400 p-4 mr-4'>Book Now!</button>
						<button className='flex justify-center items-center w-32 bg-wite text-black rounded-3xl border border-slate-400 p-4'>Read More</button>
					</div>
					<div className='flex w-full justify-between items-center'>
						<div>
							<h1 className='text-center text-5xl font-bold mr-8'>12+</h1>
							<h4>Customers</h4>
						</div>
						<div>
							<h1 className='text-center text-5xl font-bold mr-8'>14+</h1>
							<h4>Offices</h4>
						</div>
						<div>
							<h1 className='text-center text-5xl font-bold'>10+</h1>
							<h4>Students</h4>
						</div>

					</div>
			</div>
			<div className='relative'>
				<Image src="/imgbot.png" width={500} height={500} alt='imagem'/>
				<div className='absolute inset-0 rounded-xl' style={{
							background: 'linear-gradient(116deg, rgba(193, 222, 232, 0.70) 9.86%, rgba(255, 255, 255, 0.00) 52.13%, rgba(251, 217, 185, 0.70) 97.99%)',
						}}></div>
			</div>
			</div>
		</div>
	)
}
