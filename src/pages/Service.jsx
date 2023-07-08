import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const Service = () => {
    return (
        <div>  
            <BannerOverlay src={BannerImage} title={"Services"} subtitle={"We got what you need!"}/>
            <Footer />
        </div>
    )
}

export default Service;