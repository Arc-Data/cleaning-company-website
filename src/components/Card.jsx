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
        <div className="bg-white rounded-lg shadow flex-col transform">
            <img src={imageUrl} alt="Nice" className="object-cover h-60 w-full rounded-t-lg" />
            <div className="flex flex-col px-5">
                <div className="py-10 space-y-8">
                    <p className="text-primary text-2xl font-bold">{card.title}</p>
                    <p className="line-clamp-3 text-gray-800">{card.description}</p>
                </div>
                <div className='mb-10'>
                <button className="text-primary text-xl hover:underline">Read More</button>

                </div>
            </div>
        </div>
    );
};

export default Card;
