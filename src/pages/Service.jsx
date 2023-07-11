import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import Card from "../components/Card";
import { onSnapshot } from "firebase/firestore";
import { servicesCollection } from "../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
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
        <div>  
            <BannerOverlay src={BannerImage} title={"Services"} subtitle={"We got what you need!"}/>
            <section className="p-6 md:p-32">
                <div className="container mx-auto grid md:grid-cols-3 gap-10">
                    {services.map((card) => {
                        return <Link key={card.id} to={{pathname: `/services/${card.id}`}}><Card key={card.id} card={card}/></Link> 
                    })}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Service;