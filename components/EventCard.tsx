'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import { useLanguage } from '@/context/LanguageContext';

type EventProps = {
  title: {
    en: string;
    mn: string;
  };
  shortDescription: {
    en: string;
    mn: string;
  };
  fullDescription: {
    en: string;
    mn: string;
  };
  image: string;
};

const EventCard: React.FC<EventProps> = ({
  title,
  shortDescription,
  fullDescription,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <div
        className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 w-full">
          <Image src={image} alt={title[language]} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">{title[language]}</h3>
          <p className="text-gray-600 mt-2">{shortDescription[language]}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col space-y-4 p-6">
            <Image
              src={image}
              alt={title[language]}
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
            <h2 className="text-2xl font-bold">{title[language]}</h2>
            <p className="text-gray-700">{fullDescription[language]}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EventCard;
