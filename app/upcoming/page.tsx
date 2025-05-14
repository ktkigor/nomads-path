'use client';

import React, { useEffect, useState } from 'react';
import EventCard from '@/components/EventCard';
import { useLanguage } from '@/context/LanguageContext';

type EventType = {
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

const Upcoming = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data: EventType[]) => setEvents(data))
      .catch((err) => console.error('Failed to fetch events', err));
  }, []);

  return (
    <div className="min-h-screen px-6 pt-20 pb-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {language === 'en' ? 'Upcoming Events' : 'Тун удахгүй болох арга хэмжээнүүд'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
