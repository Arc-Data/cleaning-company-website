import { Link } from "react-router-dom";

const RootLayout = () => {
    return (
        <header className ="bg-blue-800 p-4 text-white">
            <div className="flex">
                <p>Insert Image Here</p>
                <nav className="ml-auto">
                <Link to = "/" className="p-2 text-xl">Home</Link>
                <Link to = "/" className="p-2 text-xl">About</Link>
                <Link to = "/" className="p-2 text-xl">Category</Link>
                <Link to = "/" className="p-2 text-xl">Services</Link>
                <Link to = "/" className="p-2 text-xl">Book Now!</Link>
                </nav>
            </div>
            
        </header>
    )
}

export default RootLayout;