import { Link } from "react-router-dom";

const RootLayout = () => {
    return (
        <header className ="shadow p-5 font-inter">
            <div className="flex items-center content-end">
                <img src="images/Logo-Transparent.png" width="130px" height="130px"/>
                <nav className="ml-auto flex flex-col space-y-10">
                    <div className="info flex text-xs gap-2.5">
                       <p>
                           Email: sweepingmasters@gmail.com
                       </p>
                       <p>
                           Contact No.: 63+ 920-275-0407
                       </p>
                    </div>
                    <div className="navlinks flex gap-12 items-center">
                        <Link to = "/">Home</Link>
                        <Link to = "/about">About</Link>
                        <Link to = "/category">Category</Link>
                        <Link to = "/service">Services</Link>
                        <Link to = "/book">
                            <button className = "bg-primary text-white py-1 px-3.5 rounded">Book Now!</button>
                        </Link>
                    </div>
                </nav>
            </div>
            
        </header>
    )
}

export default RootLayout;