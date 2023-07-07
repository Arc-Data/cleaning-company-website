import Banner from "../components/Banner";
import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const About = () => {
    return (
        <div className="text-inter">
            <BannerOverlay src={BannerImage} title={"About Us"} subtitle={"Why Choose Sweeping Masters"}/>
            <Footer />
        </div>
    )
}

export default About;