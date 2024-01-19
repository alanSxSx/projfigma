import React from 'react'
import TextMain1 from '../components/TextMain1'



export default function Main1() {
    return (

        <div className='relative w-full my-8 h-3/5 w-1380 h-617 left-30 top-156 bg-cover bg-center rounded-xl overflow-hidden'>
        {/* Div para o gradiente linear */}
        <div className='absolute inset-0 ' style={{
            background: 'linear-gradient(90deg, #C1DEE8 0%, #FBD9B9 100%)',
        }}></div>

        {/* Div para a textura */}
        <div className='absolute inset-0 bg-texture'></div>

        {/* Div para o conteúdo */}
        <div className='relative z-10'>
            <TextMain1/>
        </div>

        

        {/* Seu conteúdo aqui */}
    </div>

    )
}
