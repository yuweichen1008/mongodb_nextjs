import { session } from 'next-auth/client'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <header>
      <title>MongoDB+NextJS</title>
    </header>
    <Navbar transparent/>
    {session && <>
      <div>You are logged in</div>
    </>}
    {!session && <>
      <div>Login to see</div>
    </>}
    </>
  )
}
