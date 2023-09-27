import CardMusic from '@/components/CardMusic'
import NavBar from '@/components/NavBar'
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
     <NavBar />

     <Title>em alta</Title>

      <section className='flex flex-wrap'>
        {Music.map(Music=> <CardMusic music={Music} /> )}
      </section>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}