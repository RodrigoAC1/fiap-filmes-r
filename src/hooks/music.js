
//hook

import { useState } from "react";

export default function useFavorito(){
    const [favorito, setFavorito] = useState(false)

    function favoritar(music){
        setFavorito(true)
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
            },
            body: JSON.stringify({name: music.name, artist: music.artist, watchlist: true})
        };
        
        fetch('http://localhost:3001/favoritos', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function desfavoritar(music){
        setFavorito(false)
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
            },
            body: JSON.stringify({name: music.name, artist: music.artist, watchlist: false})
        };
        
        fetch('http://localhost:3001/favoritos', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return { favoritar, desfavoritar, favorito }

}