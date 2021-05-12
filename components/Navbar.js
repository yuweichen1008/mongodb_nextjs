import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

const Navbar = () => {
    const [ session, loading ] = useSession()

    return (
        <div className="flex h-20 justify-between items-center p-6">
            {/* left */}
            <div className="flex flex-wrap mr-6">
                <div>Logo</div>
                <span className="font-semibold text-xl tracking-tight">MongoDB+NextJS</span>
            </div>
            {/* right */}
            <div className="flex p-5 justify-between">
                <div>
                    Movie
                </div>
                <div>
                    Ship wracks
                </div>
                <div className="flex">
                    {!session && <>
                        <button onClick={() => signIn()}>Sign in</button>
                    </>}
                    {session && <>
                        <div>Signed in as {session.user.name}</div>
                        <div className="relative w-12 h-12">
                            <img className="rounded-full max-w-full h-auto align-middle border-none" src={session.user.image} alt="user image" />
                            <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-red-400 z-2"></div>
                        </div>
                        
                        <button onClick={() => signOut()}>Sign out</button>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
