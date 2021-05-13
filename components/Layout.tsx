import Nav from './Navbar'
// import Meta from './Meta'

const Layout = ({children}) => {
    return (
        <>
            {/* <Meta /> */}
            <Nav />
            <div className="flex">
                <main className="">
                    {children}
                </main>
                
            </div>
        </>
    )
}
export default Layout