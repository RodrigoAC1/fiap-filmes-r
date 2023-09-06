import CardFilme from '@/components/Cardmusic'
import Title from '@/components/Title'

export default function Home() {
  const filmes = [
    {
      titulo: "Anos Luz",
      nota: 6.2,
      poster: "https://th.bing.com/th/id/OIP.fiADlluS74qB0Gn4vCfDUAHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      titulo: "Cartão black",
      nota: 7.5,
      poster: "https://th.bing.com/th/id/OIP.qU79_MPl1mg7A8OOgBwVWgHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7"
    }
  ]

  return ( //JSX
    <>
      <nav className="bg-green-700 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Fiap Musics</h1></a></li>
        </ul>
        <ul>
          <li><a href="#">favoritos</a></li>
        </ul>
        <ul>
          <li><a href="#">Musicas</a></li>
        </ul>
        
      </nav>

     <Title>em alta</Title>

      <section className='flex flex-wrap'>
        {filmes.map(filme => <CardFilme filme={filme} /> )}
      </section>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}