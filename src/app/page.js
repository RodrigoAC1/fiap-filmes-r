import Title from '@/components/Title'
import Image from 'next/image'

export default function Home() {
  return ( //JSX
    <>
      <nav className="flex p-4 bg-green-700">
        <ul className="flex gap-20">
          <li>
            <a href="#">
              <h1>Fiap Music</h1>
            </a>
          </li>
          <li>
            <a href="#">
              favoritos
            </a>
          </li>
          <li>
            <a href="#">
              Musicas
            </a>
          </li>
          <li>
            <a href="#">
              Podcast
            </a>
          </li>
        </ul>

      </nav>

     <Title>em alta</Title>

      <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        <img className='rounded' src="https://place-hold.it/150x220/666" alt="" />
        <span className='font-bold text-center line-clamp-1'>Nome da musica</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className='bg-red-600 py-2 w-full rounded text-center'>
          detalhes
        </a>
      </div>

     <Title>Novas</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
