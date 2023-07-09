import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase';

const Card = ({ card }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const storageRef = ref(storage, card.imageUrl);
    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error('Error getting image URL from Firebase Storage:', error);
      });
  }, [card.imageUrl]);

  return (
    <div className="bg-white rounded-lg shadow flex-col transform hover:cursor-pointer hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt="Nice" className="object-cover h-60 w-full rounded-t-lg" />
      <div className="px-5 py-10 space-y-8">
        <p className="text-primary text-2xl font-bold">{card.title}</p>
        <p className="line-clamp-3">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
