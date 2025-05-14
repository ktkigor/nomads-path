'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import { useLanguage } from '@/context/LanguageContext';

type Place = {
  _id: string;
  title: {
    en: string;
    mn: string;
  };
  fullDescription: {
    en: string;
    mn: string;
  };
  image: string;
  lat: number;
  lng: number;
};

const PlaceCard = ({ place }: { place: Place }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
    window.open(url, '_blank');
  };

  const altText = place.title?.[language] || 'Place image';

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      >
        <div className="relative w-full h-48">
          <Image
            src={place.image}
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">{place.title[language]}</h3>
          <p className="text-gray-600 mt-2 line-clamp-3">
            {place.fullDescription[language]}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col space-y-4 p-6">
            <Image
              src={place.image}
              alt={altText}
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
            <h2 className="text-2xl font-bold">{place.title[language]}</h2>
            <p className="text-gray-700">{place.fullDescription[language]}</p>

            <button
              onClick={openMap}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View on Map
            </button>

            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PlaceCard;
