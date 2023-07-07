import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
        <header className ="container overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal shadow-md sticky top-0 p-6 font-inter z-10 bg-white">
            <div className="mx-auto flex items-center content-end md:justify-between">
                <img src="images/Logo-Transparent.png" className="hidden md:block w-32 h-auto"/>
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
            </div>
        </header>
        <Outlet />
        </>
    )
}

export default RootLayout;