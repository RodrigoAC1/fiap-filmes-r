import CardMusic from '@/components/CardMusic'
import Title from '@/components/Title'

async function carregarMusics(){
  const url = "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.data
}

export default async function Home() {
  
  const Music = await carregarMusics()

  return ( //JSX
    <>
      <nav className="bg-green-700 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Fiap Music</h1></a></li>
        </ul>
        <ul>
          <li><a href="#">favoritos</a></li>
        </ul>
        <ul>
          <li><a href="#">filmes</a></li>
        </ul>
        
      </nav>

     <Title>em alta</Title>

      <section className='flex flex-wrap'>
        {Music.map(Music=> <CardMusic music={Music} /> )}
      </section>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}