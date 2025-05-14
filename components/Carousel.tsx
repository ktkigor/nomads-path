'use client';

import React from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const images = [
  { src: '/images/ger.jpeg', alt: 'Ger image' },
  { src: '/images/terelj.png', alt: 'Terelj landscape' },
];

const FullscreenCarousel = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0">
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
        showIndicators={false}
      >
        {images.map((image, idx) => (
          <div key={idx} className="relative w-screen h-screen">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              priority
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FullscreenCarousel;
