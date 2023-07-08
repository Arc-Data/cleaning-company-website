import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const Contact = () => {
    return (
        <div>  
            <BannerOverlay src={BannerImage} title={"Contact"} subtitle={"Reach Out To Us!"}/>
            <Footer />
        </div>
    )
}

export default Contact;