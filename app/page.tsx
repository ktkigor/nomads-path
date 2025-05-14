'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      <div className="w-full h-[80vh] relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={1000}
          stopOnHover={false}
          swipeable
          emulateTouch
          showArrows={false}
        >
          <div>
            <Image
              src="/images/ger.jpeg"
              alt="Ger"
              width={1600}
              height={800}
              className="object-cover w-full h-[80vh]"
            />
          </div>
          <div>
            <Image
              src="/images/terelj.png"
              alt="Terelj"
              width={1600}
              height={800}
              className="object-cover w-full h-[80vh]"
            />
          </div>
        </Carousel>
      </div>

      <section className="px-6 mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4">{t.home}</h1>
        <p className="text-lg max-w-2xl mx-auto">
          {language === 'en'
            ? 'Discover Mongolia’s beauty and plan your journey with Nomads Path.'
            : 'Монгол орны гайхамшгийг олж мэдэн, аяллаа Нүүдэлчдийн Зам-аар төлөвлөөрэй.'}
        </p>
      </section>
    </main>
  );
}
