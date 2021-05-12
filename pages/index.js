import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <header>
      <title>MongoDB+NextJS</title>
    </header>
    <Navbar />
    <input type="text"
      placeholder="Custom focus style"
      className="focus:outline-none focus:ring focus:border-blue-300 ..." />
    </>
  )
}
