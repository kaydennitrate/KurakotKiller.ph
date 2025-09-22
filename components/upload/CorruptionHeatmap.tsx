'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { corruptionSites } from '@/lib/mockData';
import type { CorruptionSite } from '@/lib/mockData';
import 'leaflet/dist/leaflet.css';

// Custom hook to fit bounds
function FitBounds({ sites }: { sites: CorruptionSite[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (sites.length > 0) {
      const group = sites.map(site => site.location);
      map.fitBounds(group, { padding: [20, 20] });
    }
  }, [map, sites]);
  
  return null;
}

export function CorruptionHeatmap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-80 bg-gray-900 rounded-lg flex items-center justify-center">
        <div className="text-white">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white">Corruption Heatmap</h3>
        <p className="text-gray-400 text-sm mt-1">
          Interactive map showing locations of stolen flood control funds
        </p>
      </div>
      
      <div className="h-80 relative">
        <MapContainer
          center={[12.8797, 121.7740]} // Center of Philippines
          zoom={6}
          className="h-full w-full"
          zoomControl={true}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds sites={corruptionSites} />
          
          {corruptionSites.map((site) => (
            <CircleMarker
              key={site.id}
              center={site.location}
              radius={10 + (site.corruptionPercentage / 10)}
              fillColor="#DC2626"
              color="#FCD116"
              weight={2}
              opacity={0.8}
              fillOpacity={0.6}
              className="corruption-marker"
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[200px]">
                  <h4 className="font-bold text-corruption-red mb-2">
                    {site.name}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Stolen:</span>
                      <span className="font-semibold text-corruption-red">
                        {site.stolenAmount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Corruption Level:</span>
                      <span className="font-semibold">
                        {site.corruptionPercentage}%
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-gray-700 text-xs leading-relaxed">
                        {site.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      
      {/* Legend */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-corruption-red border-2 border-corruption-yellow"></div>
              <span className="text-gray-300">Corruption Site</span>
            </div>
            <div className="text-gray-400">
              Size indicates corruption level
            </div>
          </div>
          <div className="text-corruption-yellow font-semibold">
            Total: ₱3.3 Trillion Stolen
          </div>
        </div>
      </div>
    </div>
  );
}