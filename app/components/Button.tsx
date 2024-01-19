import React from 'react'

export default function Button({ Nome }: { Nome: string }) {
	return (
		<>
			<button className='flex justify-center items-center w-32 bg-slate-50 rounded-3xl border border-slate-400 '>{Nome}</button>
		</>
	)
}
