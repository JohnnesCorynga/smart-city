import Link from 'next/link'
import React from 'react'
import img404 from "@/assets/images/img-error-404.png"
import Image from 'next/image'
export default function Pagina404() {
    return (
        <div className='flex flex-col h-full w-full justify-center items-center gap-5 p-3'>
            <Image src={img404} alt="Error 404" width={300} height={300}></Image>
            <h1 className='text-4xl font-bold text-red-600'>404 - Página não encontrada</h1>
            <p className='text-center text-paragraph'>
                Ops! Parece que a página que você está procurando não existe.
            </p>
            <p  className='text-center text-paragraph'>
                Se você acha que isso é um erro, entre em contato com o suporte.
            </p>
            <Link className='button' href="/">Voltar á página inicial</Link>
        </div>
    )
}

