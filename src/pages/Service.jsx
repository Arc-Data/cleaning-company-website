import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import Cards from "../data/cards";
import Card from "../components/Card";

const Service = () => {
    return (
        <div>  
            <BannerOverlay src={BannerImage} title={"Services"} subtitle={"We got what you need!"}/>
            <section className="p-6 md:p-32">
                <div className="container mx-auto grid md:grid-cols-3 gap-10">
                    {Cards.map((card, idx) => {
                        return <Card key={idx} title={card.title} src={card.src} description={card.description}/> 
                    })}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Service;