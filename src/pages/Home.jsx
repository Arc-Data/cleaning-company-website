import Banner from "../components/Banner";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import AboutImage from "/images/CleaningServiceGroup.jpeg"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Cards from "../data/cards";


const Home = () => {  
    return (
        <div className="text-inter">
            <div className="relative">
                <Banner src={BannerImage}/>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white" >
                    <div className="container flex flex-col h-full w-full p-4 md:mx-auto space-y-10 justify-center items-start">
                        <div className="flex flex-col space-y-4">
                            <p className="text-4xl text-accent font-extrabold">Expert Cleaning Solutions.</p>
                            <p className="text-4xl text-accent font-extrabold">Reliable, Trusted and Affordable.</p>
                            <p className="text-xl">Highly Regarded Cleaning Services in Manila</p>
                        </div>
                        <Link to = "/about">
                            <button className="inline-flex bg-white text-accent text-2xl py-3 px-6 rounded font-medium duration-100 hover:scale-1">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <main className="grid place-items-center">
                <div className = "grid md:grid-cols-2 max-w-screen-xl mx-auto place-items-center my-14 gap-12 p-3">
                    <img src={AboutImage} className="rounded"/>
                    <div className="flex flex-col h-full justify-between">
                        <div className = "flex flex-col space-y-10">
                            <p className="text-5xl text-primary font-semibold">We care about our work.</p>
                            <p className="text-xl">We at Sweeping Masters care about the well being of our clients and their homes, therefore we carefully tend to the requests and do even more. We are a company based in Marikina and offers services within Manila. We are dedicated in improving our crafts and into listening and appropriately responding the needs of our clients. </p>
                        </div>
                        <Link to = "/about" className="text-right text-accent text-2xl font-bold">About the company</Link>
                    </div>
                </div> 
                <div className="bg-secondary w-full py-16 flex flex-col space-y-10">
                    <p className="text-5xl text-center text-primary font-bold">Services</p>
                    <div className="container mx-auto grid md:grid-cols-3 p-10 gap-10">
                        {Cards.map((card, idx) => {
                            return <Card key={idx} title={card.title} src={card.src} description={card.description}/>
                        })}
                    </div>
                </div> 
            </main>  
            <Footer/>
        </div>
    )
}

export default Home;