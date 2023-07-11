import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesCollection, storage } from "../firebase";
import BannerOverlay from "../components/BannerOverlay";
import { getDownloadURL, ref } from "firebase/storage";

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
        console.log(cardSnapshot.data());

        if (cardSnapshot.exists()) {
          setCard(cardSnapshot.data());
          const imageRef = ref(storage, cardSnapshot.data().imageUrl);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } else {
          console.log("Service does not exist");
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
            <div className="container mx-auto rounded mt-4 p-4 border">
                <BannerOverlay src={imageUrl} title={card.title} />
            </div>

        </div>    
    )
}

export default ServiceDetail;