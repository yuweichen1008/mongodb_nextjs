import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

const Navbar = () => {
    const [ session, loading ] = useSession()

    return (
        <nav className="top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            className="px-5 text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="\"
            onClick={e => e.preventDefault()}
          >
            Dashboard
          </Link>
          <Link
            className="px-5 text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="/coin"
            onClick={e => e.preventDefault()}
          >
            Crypto
          </Link>
          <Link
            className="px-5 text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="/chart"
            onClick={e => e.preventDefault()}
          >
            Chart
          </Link>
          <Link
            className="px-5 text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="/movie"
            onClick={e => e.preventDefault()}
          >
            Movie
          </Link>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            {/* <UserDropdown /> */}
            {session && <>
                        <div>Signed in as {session.user.name}</div>
                        <div className="relative w-12 h-12">
                            <img className="rounded-full max-w-full h-auto align-middle border-none" src={session.user.image} alt="user image" />
                            <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-red-400 z-2"></div>
                        </div>
                        <button onClick={() => signOut()}>Sign out</button>
                    </>}
            {!session && <>
                <button onClick={() => signIn()}>Sign In</button>
            </>}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
