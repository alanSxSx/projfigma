import React, { ReactNode } from 'react'

interface TitleMainProps {
  title: ReactNode;
}

const TitleMain: React.FC<TitleMainProps> = ({ title }) => {
	return (
		<div className='flex w-2/4 justify-center items-center text-center text-5xl pb-16 font-bold'>{title}</div>
	)
}

export default TitleMain;
