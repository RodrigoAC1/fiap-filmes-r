"use client"

import { HeartIcon } from '@heroicons/react/24/outline'
import useFavorito from '@/hooks/music'

export default function CardMusic({music}){
    const { favorito, desfavoritar, favoritar } = useFavorito()

    const url_imagem = `${music.image}`

    return (
        <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
            { favorito ? 
                <HeartIcon onClick={() => desfavoritar(music)} className="h-6 w-6 text-rose-600 cursor-pointer " />
                 :
                <HeartIcon onClick={() => favoritar(music)}  className="h-6 w-6 text-slate-100 cursor-pointer" />
            }
            <img className='rounded' src={url_imagem} alt="" />
            <span className='font-bold text-center line-clamp-1'>
                {music.name} - {music.artist}
            </span>
            <div>
                <span>{music.rank}°</span>
            </div>
            <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
                detalhes
            </a>
        </div>
    )
}
