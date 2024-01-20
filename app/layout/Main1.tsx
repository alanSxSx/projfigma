import React from 'react'
import TextMain1 from '../components/TextMain1'
import Image from 'next/image'



export default function Main1() {
    return (

      <div className='relative w-full my-8 h-4/5 w-1380 h-617 left-30 top-156 bg-cover bg-center rounded-xl z-0'>


			<Image width={500} height={500} alt='casa' src="/final1.png" style={{
        width: '45%',
        height: 'auto',
      }} quality={100} className='absolute  inset-y-0 right-0 z-30'/>


        {/* Div para o gradiente linear */}
        <div className='absolute inset-0 ' style={{
            background: 'linear-gradient(90deg, #C1DEE8 0%, #FBD9B9 100%)',
        }}></div>

        {/* Div para a textura */}
        <div className='absolute inset-0 bg-texture'></div>

        {/* Div para o conteúdo */}
        <div className='relative z-10 w-full h-full'>
            <TextMain1/>
        </div>



        {/* Seu conteúdo aqui */}
    </div>




    )
}
