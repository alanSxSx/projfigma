import React from 'react'
import Image from 'next/image'
import TextMain3 from '../components/TextMain3'



export default function Main5() {
    return (

      <div className='relative w-full my-8 h-3/5 w-1380 h-617 left-30 top-156 bg-cover bg-center rounded-xl z-0'>


			<Image width={500} height={500} alt='casa' src="/c4.png" style={{
        width: '33%',
        height: 'auto',
      }} quality={100} className='absolute  -inset-y-5 right-0 z-30'/>


        {/* Div para o gradiente linear */}
        <div className='absolute inset-0 ' style={{
            background: 'linear-gradient(90deg, #C1DEE8 0%, #FBD9B9 100%)',
        }}></div>

        {/* Div para a textura */}
        <div className='absolute inset-0 bg-texture'></div>

        {/* Div para o conteúdo */}
        <div className='relative z-10 w-full h-full'>
            <TextMain3/>
        </div>



        {/* Seu conteúdo aqui */}
    </div>




    )
}
