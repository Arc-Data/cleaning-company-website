import Banner from "../components/Banner";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import AboutImage from "/images/CleaningServiceGroup.jpeg"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Cards = [
    {
        "title": "Post Construction Cleaning Services",
        "src": "/images/Staircase.jpeg",
        "description": "Don't know where to start after getting your house renovated or constructed? Our post-construction cleaning services are perfect for you! We will remove all leftover dust, debris, and dirt, transitioning your home and making it clean as new!"
    },
    {
        "title": "Residential Cleaning Services",
        "src": "/images/Staircase.jpeg",
        "description": "Have you ever dreamt of coming home to your apartment and not ever thinking of your cleaning responsibilities? Well, this service is right up your alley! Our professionals will clean and handle your apartment, making it comfortable, dust and dirt-free!"
    },
    {
        "title": "Residential Deep Cleaning Services",
        "src": "/images/Staircase.jpeg",
        "description": "Sometimes, the nooks and crannies in our home are difficult to reach and clean, making dust gather in one place. Let our professionals handle all your hassles with our deep cleaning services! We can guarantee your satisfaction and can accommodate your personal requests."
    },
    {
        "title": "Commercial Deep Cleaning Services",
        "src": "/images/Staircase.jpeg",
        "description": "General cleaning is usually not enough to remove the built-up dirt and dust. Our commercial deep-cleaning services will ease your cleaning responsibilities. With our professionals, we can easily remove the built-up dirt, dust, and unnecessary hazards in your establishments."
    },
    {
        "title": "House/Office Keeping",
        "src": "/images/Staircase.jpeg",
        "description": "Work will always get busy as it gets. Do you find yourself having no time to clean? Well, we have professionals who can do it for you! We offer one-time or regular office or housekeeping cleaning services that fit your needs! Rest assured that our services will make your office or home a comfortable and cozy atmosphere."
    },
    {
        "title": "Commerical Cleaning Services",
        "src": "/images/Staircase.jpeg",
        "description": "Daily, customers and employees come and go in buildings and establishments. It always is messy right after a business week. Let our company's professionals handle all your cleaning needs! We offer a variety of services depending on your type of establishment or business. Book now!"
    },
];

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
                        <button className="inline-flex bg-white text-accent text-2xl py-3 px-6 rounded font-medium duration-100 hover:scale-1">Learn More</button>
                    </div>
                </div>
            </div>
            <main className="grid place-items-center">
                <div className = "grid grid-cols-2 max-w-screen-xl mx-auto place-items-center my-14 gap-12 p-3">
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
                <div className="bg-secondary w-full py-16 flex flex-col space-y-10">
                    <p className="text-5xl text-center text-primary font-bold">Services</p>
                    <div className="container mx-auto grid md:grid-cols-3 p-10 gap-y-5 gap-x-20">
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