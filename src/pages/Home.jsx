import Banner from "../components/Banner";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import AboutImage from "/images/CleaningServiceGroup.jpeg"
import { Link } from "react-router-dom";

const Home = () => {  
    return (
        <div className="text-inter">
            <div className="relative">
                <Banner src={BannerImage}/>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white" >
                    <div className="flex flex-col w-3/5 h-full space-y-10 justify-center ml-20 items-start">
                        <div className="flex flex-col space-y-4">
                            <p className="text-5xl text-accent font-extrabold">Expert Cleaning Solutions.</p>
                            <p className="text-5xl text-accent font-extrabold">Reliable, Trusted and Affordable.</p>
                            <p className="text-2xl">Highly Regarded Cleaning Services in Manila</p>
                        </div>
                        <button className="inline-flex bg-white text-accent text-2xl py-3 px-6 rounded font-medium duration-100 hover:scale-1">Learn More</button>
                    </div>
                </div>
            </div>
            <main className="grid place-items-center max-w-screen-xl mx-auto">
                <div className = "grid grid-cols-2 place-items-center my-14 gap-12 p-3">
                    <img src={AboutImage}/>
                    <div className="flex flex-col h-full justify-between">
                        <div className = "flex flex-col gap-4">
                            <p className="text-2xl text-primary font-bold uppercase">Sweeping Masters Co.</p>
                            <p className="text-5xl text-primary font-semibold">We care about our work.</p>
                            <p className="text-xl">We at Sweeping Masters care about the well being of our clients and their homes, therefore we carefully tend to the requests and do even more. We are a company based in Marikina and offers services within Manila. We are dedicated in improving our crafts and into listening and appropriately responding the needs of our clients. </p>
                        </div>
                        <Link to = "/about" className="text-right text-accent text-2xl">About the company</Link>
                    </div>
                </div> 
                <div>
                    Services
                </div> 
            </main>  
        </div>
    )
}

export default Home;