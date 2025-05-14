'use client';

import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import Image from 'next/image';
import PlaceCard from '@/components/PlaceCard';
import { useLanguage } from '@/context/LanguageContext';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 47.918873,
  lng: 106.917701,
};

type PlaceType = {
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

const Page = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [searchText, setSearchText] = useState("");
  const [searchMarkers, setSearchMarkers] = useState<google.maps.Marker[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const { language } = useLanguage();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
  });

  useEffect(() => {
    fetch('/api/places')
      .then((res) => res.json())
      .then((data: PlaceType[]) => {
        console.log('Fetched places:', data);
        setPlaces(data);
      })
      .catch((err) => console.error('Failed to fetch places:', err));
  }, []);

  const handleSearch = () => {
    if (!mapRef || !searchText) return;

    const service = new google.maps.places.PlacesService(mapRef);
    const request = {
      query: searchText,
      location: mapRef.getCenter(),
      radius: 5000,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const newMarkers = results.map((place) => {
          const marker = new google.maps.Marker({
            map: mapRef,
            position: place.geometry?.location,
            title: place.name,
          });

          marker.addListener("click", () => {
            setSelectedPlace(place);
          });

          return marker;
        });

        searchMarkers.forEach((marker) => marker.setMap(null));
        setSearchMarkers(newMarkers);

        if (results[0]?.geometry?.location) {
          mapRef.panTo(results[0].geometry.location);
        }
      }
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="pt-20 px-6">
        <div className="flex items-center justify-center gap-2 max-w-xl mx-auto mb-4">
          <input
            type="text"
            placeholder="Search (e.g. ресторан, hotel, кафе...)"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={(map) => setMapRef(map)}
          >
            {places.map((place) =>
              place?.title?.[language] ? (
                <Marker
                  key={place._id}
                  position={{ lat: place.lat, lng: place.lng }}
                  title={place.title[language]}
                />
              ) : null
            )}

            {selectedPlace && selectedPlace.geometry?.location && (
              <InfoWindow
                position={selectedPlace.geometry.location}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div className="max-w-xs">
                  {selectedPlace.photos && selectedPlace.photos.length > 0 && (
                    <Image
                      src={selectedPlace.photos[0].getUrl({ maxWidth: 250, maxHeight: 150 })}
                      alt={selectedPlace.name || "Place photo"}
                      width={250}
                      height={150}
                      className="w-full h-auto mb-2 rounded"
                    />
                  )}
                  <h2 className="font-bold text-base">{selectedPlace.name}</h2>
                  {selectedPlace.rating && (
                    <p className="text-sm text-yellow-600">⭐ {selectedPlace.rating} / 5</p>
                  )}
                  <p className="text-sm text-gray-700 mt-1">
                    {selectedPlace.formatted_address || "No address available"}
                  </p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>

      <div className="p-6 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) =>
          place?.title?.[language] ? (
            <PlaceCard key={place._id} place={place} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Page;
