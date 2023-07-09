import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(open => !open);
    }

    return (
        <>
        <header className ="shadow-md sticky top-0 font-inter z-10 bg-white">
            <div className="container md:flex md:justify-between mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to = "/">
                            <img src="/images/Logo-Transparent.png" className="w-32 h-auto" alt="" />                      
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button className="block md:hidden" onClick={handleClick}>
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                {isMenuOpen ? (
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 10H5v-1h14zm0-6H5V3h14zm0 12H5v-1h14z"
                                    />
                                ) : (
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:mt-4`}>
                    <ul className="md:flex md:items-center md:space-x-4">
                        <li>
                            <Link to = "/" className=" hover:bg-gray-300 p-4 rounded-2xl block" onClick={handleClick}>Home</Link>
                        </li>
                        <li>
                            <Link to = "/about" className=" hover:bg-gray-300 p-4 rounded-2xl block" onClick={handleClick}>About</Link>
                        </li>
                        <li>
                            <Link to = "/services" className=" hover:bg-gray-300 p-4 rounded-2xl block" onClick={handleClick}>Services</Link>
                        </li>
                        <li>
                            <Link to = "/contact" className=" hover:bg-gray-300 p-4 rounded-2xl block" onClick={handleClick}>Contact</Link>
                        </li>
                        <Link to = "/contact" onClick={handleClick}>
                            <button className = "bg-primary text-white p-4 rounded uppercase hover:opacity-80">Book Now!</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
        {/* <div className="mx-auto flex items-center content-end md:justify-between">
                        <img src="images/Logo-Transparent.png" className="w-32 h-auto"/>
                        <nav className="flex flex-col md:space-y-10">
                            <div className="hidden md:flex info text-xs justify-end space-x-5">
                            <p>
                            <i class="fa-solid fa-envelope"></i> sweepingmasters@gmail.com
                            </p>
                            <p>
                            <i class="fa-solid fa-phone"></i> 63+ 920-275-0407
                            </p>
                            </div>
                            <div className="flex gap-12 items-center uppercase font-semibold text-primary">
                                <Link to = "/" className=" hover:bg-gray-300 p-4 rounded-2xl">Home</Link>
                                <Link to = "/about" className=" hover:bg-gray-300 p-4 rounded-2xl">About</Link>
                                <Link to = "/services" className=" hover:bg-gray-300 p-4 rounded-2xl">Services</Link>
                                <Link to = "/contact" className=" hover:bg-gray-300 p-4 rounded-2xl">Contact</Link>
                                <Link to = "/book">
                                    <button className = "bg-primary text-white p-4 rounded uppercase hover:opacity-80">Book Now!</button>
                                </Link>
                            </div>
                        </nav>
                    </div> */}
        <Outlet />
        </>
    )
}

export default RootLayout;