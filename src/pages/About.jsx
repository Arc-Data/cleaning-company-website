import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const About = () => {
    return (
        <div>
            <Banner src={BannerImage}/>
            <Footer />
        </div>
    )
}

export default About;