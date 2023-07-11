import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, servicesCollection, storage } from "../firebase";

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

    useEffect(() => {
        const fetchImage = async () => {
            if (card && card.imageRef) {
                try {
                    const imageRef = storage.ref().child(card.imageRef);
                    const imageUrl = await imageRef.getDownloadURL();
                    setImageUrl(imageUrl);
                    console.log(imageUrl);
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }
        };

        fetchImage();
    }, [card]);
    
    if(loading) {
        return <div>Loading...</div>
    }

    if(!card) {
        return <div>Service does not exist.</div>
    }

    return (
        <div>{card.title}</div>    
    )
}

export default ServiceDetail;