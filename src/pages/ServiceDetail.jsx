import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesCollection, storage } from "../firebase";
import BannerOverlay from "../components/BannerOverlay";
import { getDownloadURL, ref } from "firebase/storage";
import Footer from "../components/Footer";

const Star = ({isFilled}) => {
    const color = isFilled ? "text-yellow-400" : "text-gray-300";

    return (
        <svg className={`w-5 h-5 ${color}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
        </svg>
    )
}

const Review = ({review}) => {
    const stars = Array.from({ length: 5 }, () => 0);

    return (
        <div class="container mx-auto border-t py-8">
            <div class="flex items-center content-between">
                <p>{review.name}</p>
                <div>
                    { stars.map((star, idx) => <Star key={idx} isFilled={idx < review.star}/>) }      
                </div>         
            </div>
            <p class="mt-5">{review.review}</p>
        </div> 
    )
};

const Reviews = (reviews) => {
    return reviews.map((review, idx) => (<Review key={idx} review={review}/>))
}

const Rates = (rates) => {
    let arr = [];
    for (let rate in rates) {
        arr.push(`₱${rates[rate]} per ${rate} hours`);
    }

    return (arr.map((i, idx) => <p key={idx} className="text-xl">{i}</p>));
};

const SQM = (sqm) => {
    return (
        <p className="text-xl">{sqm} per square meter.</p>
    )
};

const ServiceDetail = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const cardRef = doc(servicesCollection, id);
                const cardSnapshot = await getDoc(cardRef);

                if (cardSnapshot.exists()) {
                    setCard(cardSnapshot.data());
                    const imageRef = ref(storage, cardSnapshot.data().imageUrl);
                    const url = await getDownloadURL(imageRef);
                    setImageUrl(url);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching card:", error);
            
            }
        };

        fetchCard();
    }, [id]);

    if(loading) {
        return <div>Loading...</div>
    }

    if(!card) {
        return <div>Service does not exist.</div>
    }

    return (
        <div>
            <div className="container mx-auto rounded mt-4 p-4 border shadow-md">
                <BannerOverlay src={imageUrl} title={card.title} />
            </div>
            <div className="container mx-auto grid md:grid-cols-[800px_1fr] p-12 gap-12 auto-rows-2">
                <div className="flex flex-col space-y-8 border-l p-6 md:p-12 shadow-md rounded bg-primary text-white order-none md:order-2">
                    <p className="text-3xl font-bold">Rates</p>
                     {card.rates && Rates(card.rates)}
                     {card.sqm && SQM(card.sqm)}
                </div>
                <div className="flex flex-col space-y-12 text-xl text-gray-800 sm:leading-loose md:leading-loose row-span-2">
                    <p>{card.description}</p>
                    <p className="text-3xl text-primary font-bold">Service Reviews</p>
                    <div className="flex flex-col space-y-4">
                        {card.reviews && Reviews(card.reviews)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>    
    )
};

export default ServiceDetail;