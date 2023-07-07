import Banner from "../components/Banner";
import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const Contact = () => {
    return (
        <div>  
            <BannerOverlay src={BannerImage} title={"Contact"} subtitle={"Reach Out To Us!"}/>
            <section className="p-32">
                Hello 
            </section>
            <Footer />
        </div>
    )
}

export default Contact;