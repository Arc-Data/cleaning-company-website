import AboutCard from "../components/AboutCard";
import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";

const AboutCards = [
    {
        'title': 'Expert Staff',
        'description': 'We are committed to ensuring the quality of our work. Our staff are guided with up to date knowledge and we conduct monthly refreshers to ensure that our staff can come up with maximizing cleaning efficiency without sacrificing quality.'
    },
    {
        'title': 'Affordable Deals',
        'description': 'We provide affordable and reasonable prices guided by our competitive marketing research efforts.  We ensure reasonable prices according to client requirements.'
    },
    {
        'title': '100% Satisfaction',
        'description': 'We take customer satisfaction seriously and make sure that we meet our client requirements in order to build our reputation as a dependable cleaning company service.'
    }
];

const About = () => {
    return (
        <div className="text-inter">
            <BannerOverlay src={BannerImage} title={"About Us"} subtitle={"Why Choose Sweeping Masters"}/>
            <section className="p-6 md:p-32">
                <div className="grid md:grid-cols-3 gap-8">
                    {AboutCards.map((card, idx) => {
                        return <AboutCard key={idx} card={card} inverted={idx === 1}/> 
                    })}
                </div>
            </section>
            <section className="p-6 md:p-32 bg-secondary">
                <div className=" text-white flex flex-col space-y-10 md:space-y-20">
                    <div className="flex flex-col space-y-2">
                        <p className="uppercase font-semibold text-gray-500">About The Company</p>
                        <p className="font-bold text-4xl md:text-6xl">Gets the job done. Smiles Guaranteed.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 p-3">
                        <img src="/images/CleaningServiceGroup2.jpeg" className="rounded-lg"/>
                        <div className="text-xl text-gray-300 text-justify leading-loose">Our team is ready to cater to your cleaning requirements, whether you need a one-time cleaning session, a regular weekly visit, or even an emergency call-out. We are experienced in both residential and commercial cleaning, serving homeowners and letting agents alike. Our cleaners are known for their flexibility and reliability, ensuring that we meet and surpass your expectations. Utilizing cutting-edge cleaning equipment, we guarantee a thorough and hygienic cleaning of your home with each visit. Our mission is to provide you with an exceptional cleaning experience that goes beyond your satisfaction.</div>
                        <div className="border-l border-gray-800  text-2xl font-bold p-5 leading-loose text-primary">
                            "I recently hired Sweeping Masters and I'm extremely satisfied with their service. The team arrived promptly, was professional, and paid attention to every detail. They left my house sparkling clean, and their pricing was fair. I highly recommend Sweeping Masters for top-notch cleaning services!"<br/><div className="text-white text-right text-2xl mt-6">- Mr. John Smith</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About;