import Banner from "../components/Banner";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const Home = () => {
    return (
        <div>
            <div className="relative">
                <Banner src={BannerImage}/>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white" >
                    <div className="flex flex-col w-3/5 h-full space-y-10 justify-center ml-20 items-start">
                        <div className="flex flex-col space-y-4">
                            <p className="text-5xl text-accent font-extrabold">Expert Cleaning Solutions.</p>
                            <p className="text-5xl text-accent font-extrabold">Reliable, Trusted and Affordable.</p>
                            
                            <p className="text-2xl">Highly Regarded Cleaning Services in Manila</p>
                        </div>
                        <button className="inline-flex bg-white text-accent text-2xl py-3 px-6 rounded font-medium duration-100 hover:scale-105">Learn More</button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Home;