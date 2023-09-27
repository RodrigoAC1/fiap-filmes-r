"use client"

import { serverLogout } from '@/actions/user'
import { useRouter } from 'next/navigation'

export default function NavBar(){
    const { push } = useRouter()
    
    function handleLogout(){
        serverLogout()
        push("/login")
      }

    return(
        <nav className="bg-green-700 p-4">
            <ul>
                <li><a href="#"><h1 className="text-3xl font-bold">Fiap Music</h1></a></li>
            </ul>
            <ul>
                <li><a href="#">favoritos</a></li>
            </ul>

            <button onClick={handleLogout}>logout</button>

        </nav>
    )
}