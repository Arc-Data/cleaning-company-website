import Banner from "../components/Banner";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import AboutImage from "/images/CleaningServiceGroup.jpeg"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { onSnapshot } from "firebase/firestore";
import { servicesCollection } from "../firebase"
import { useEffect, useState } from "react";

const Home = () => {  
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        const unsubscribe = onSnapshot(servicesCollection, snapshot => {
            const servicesArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setServices(servicesArr);
        })
        return unsubscribe;
    }, [])

    return (
        <div className="text-inter">
            <div className="relative">
                <Banner src={BannerImage}/>
                <div className="absolute inset-0 bg-black bg-opacity-70 text-white" >
                    <div className="container flex flex-col h-full w-full p-4 md:mx-auto space-y-10 justify-center items-start">
                        <div className="flex flex-col space-y-4">
                            <p className="text-5xl md:text-8xl text-primary font-extrabold">Expert Cleaning Solutions.</p>
                            <p className="text-lg md:text-xl w-1/2 md:w-full ">Sweeping Masters. Highly Regarded Cleaning Services in Manila</p>
                        </div>
                        <Link to = "/about">
                            <button className="inline-flex bg-white text-primary text-2xl py-3 px-6 rounded font-medium duration-100 hover:scale-1">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <main className="grid place-items-center">
                <div className = "container mx-auto grid md:grid-cols-2 items-center my-10 gap-x-12 space-y-20 p-12 md:p-3">
                    <img src={AboutImage} className="rounded-md md:p-12"/>
                    <div className="flex flex-col space-y-12 h-full">
                        <p className="text-3xl md:text-6xl text-primary font-semibold">We Care About Our Work</p>
                        <p className="md:text-xl leading-loose text-gray-800">We at Sweeping Masters care about the well being of our clients and their homes, therefore we carefully tend to the requests and do even more. We are a company based in Marikina and offers services within Manila. We are dedicated in improving our crafts and into listening and appropriately responding the needs of our clients. </p>
                        <Link to = "/about">
                            <button className="inline-flex bg-primary text-white text-2xl py-3 px-6 rounded font-medium duration-100 hover:scale-1">
                                About the Company
                            </button>
                        </Link>
                    </div>
                </div> 
                <div className="bg-secondary w-full py-16 flex flex-col space-y-10">
                    <p className="text-5xl text-center text-primary font-bold">Services</p>
                    <div className="container mx-auto grid md:grid-cols-3 p-10 gap-10">
                        {services.map((card) => (
                            <Link key={card.id} to={{pathname: `/services/${card.id}`}}>
                                <Card key={card.id} card={card}/>
                            </Link>
                        ))}
                    </div>
                </div> 
            </main>  
            <Footer/>
        </div>
    )
}

export default Home;