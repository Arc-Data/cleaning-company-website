import { Link } from "react-router-dom";

const RootLayout = () => {
    return (
        <header className ="shadow p-4 ">
            <div className="flex">
                <p>Insert Image Here</p>
                <nav className="ml-auto">
                <Link to = "/" className="p-4 text-2xl">Home</Link>
                <Link to = "/about" className="p-4 text-2xl">About</Link>
                <Link to = "/category" className="p-4 text-2xl">Category</Link>
                <Link to = "/service" className="p-4 text-2xl">Services</Link>
                <Link to = "/book" className="p-4 text-2xl">Book Now!</Link>
                </nav>
            </div>
            
        </header>
    )
}

export default RootLayout;