import AboutCard from "../components/AboutCard";
import Banner from "../components/Banner";
import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const AboutCards = [
    {
        'image': '',
        'title': 'Expert Staff',
        'description': 'We are committed to ensuring the quality of our work. Our staff are guided with up to date knowledge and we conduct monthly refreshers to ensure that our staff can come up with maximizing cleaning efficiency without sacrificing quality.'
    },
    {
        'image': '',
        'title': 'Affordable Deals',
        'description': 'We provide affordable and reasonable prices guided by our competitive marketing research efforts.  We ensure reasonable prices according to client requirements.'
    },
    {
        'image': '',
        'title': '100% Satisfaction',
        'description': 'We take customer satisfaction seriously and make sure that we meet our client requirements in order to build our reputation as a dependable cleaning company service.'
    }
];

const About = () => {
    return (
        <div className="text-inter">
            <BannerOverlay src={BannerImage} title={"About Us"} subtitle={"Why Choose Sweeping Masters"}/>
            <section className="p-32">
                <div className="grid grid-cols-3 gap-8">
                    {AboutCards.map((card, idx) => {
                        return <AboutCard key={idx} card={card} /> 
                    })}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About;