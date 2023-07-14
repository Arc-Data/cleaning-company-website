import BannerOverlay from "../components/BannerOverlay";
import Footer from "../components/Footer";
import BannerImage from "/images/CleaningServiceGroup4Back.jpeg";
import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({
        'inquiry': '',
        'name': '',
        'phone': '',
        'email': '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>  
            <BannerOverlay src={BannerImage} title={"Contact"} subtitle={"Reach Out To Us!"}/>
            <section className="p-6 md:p-32">
                <p className="text-5xl text-primary font-bolder text-center mb-20">Get in touch with us. We would be happy to help.</p>
                <div className="container mx-auto grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-8 ">
                        <div className="flex space-x-4 items-center">
                            <i className="fa-brands fa-facebook text-3xl text-primary"></i>
                            <p className="">Facebook</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <i className="fa-brands fa-twitter text-3xl text-primary"></i>
                            <p className="">Twitter</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <i className="fa-brands fa-instagram text-3xl text-primary"></i>
                            <p className="">Instagram</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <i class="fa-solid fa-location-dot text-3xl text-primary"></i>                         
                            <p>Rainbow Street, Hacienda Heights, Concepcion Dos, Marikina City</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <i class="fa-solid fa-envelope text-3xl text-primary"></i>
                            <p className="">sweepingmasters@gmail.com</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <i class="fa-solid fa-phone text-3xl text-primary"></i>
                            <p className="">09202750407</p>
                        </div>
                    </div>
                    <form>
                        <div className="grid md:grid-cols-2 gap-6">
                            <textarea 
                                name="inquiry" 
                                id="inquiry"
                                placeholder="Your Inquiry*" 
                                className="h-60 resize-none col-span-2 contact--form"
                                onChange={handleInputChange}
                                value={form.inquiry}/>
                            <input 
                                type="text"
                                name="name" 
                                placeholder="Your Name*"
                                className="contact--form"
                                onChange={handleInputChange}
                                value={form.name}/>
                            <input 
                                type="text"
                                name="phone" 
                                placeholder="Phone Number"
                                className="contact--form"
                                onChange={handleInputChange}
                                value={form.phone}/>
                            <input 
                                type="email"
                                name="email" 
                                placeholder="Your Email"
                                className="contact--form"
                                onChange={handleInputChange}
                                value={form.email}/>
                        </div>
                        <button className="px-12 py-4 bg-primary text-white rounded-lg text-xl mt-12" onClick={handleSubmit}>Send Inquiry</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;