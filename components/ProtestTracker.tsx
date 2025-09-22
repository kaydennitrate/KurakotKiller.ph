'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { protestSites } from '@/lib/mockData';
import type { ProtestSite } from '@/lib/mockData';
import { Calendar, Users, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Custom hook to fit bounds
function FitBounds({ sites }: { sites: ProtestSite[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (sites.length > 0) {
      const group = sites.map(site => site.location);
      map.fitBounds(group, { padding: [20, 20] });
    }
  }, [map, sites]);
  
  return null;
}

export function ProtestTracker() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#DC2626'; // Red
      case 'planned': return '#F59E0B'; // Yellow
      case 'completed': return '#10B981'; // Green
      default: return '#6B7280'; // Gray
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'LIVE NOW';
      case 'planned': return 'UPCOMING';
      case 'completed': return 'COMPLETED';
      default: return status.toUpperCase();
    }
  };

  if (!mounted) {
    return (
      <div className="w-full h-80 bg-gray-900 rounded-lg flex items-center justify-center">
        <div className="text-white">Loading protest tracker...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white">Protest Tracker</h3>
        <p className="text-gray-400 text-sm mt-1">
          Real-time tracking of protests and demonstrations
        </p>
      </div>
      
      <div className="h-80 relative">
        <MapContainer
          center={[14.5995, 120.9842]} // Manila center
          zoom={7}
          className="h-full w-full"
          zoomControl={true}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds sites={protestSites} />
          
          {protestSites.map((site) => (
            <CircleMarker
              key={site.id}
              center={site.location}
              radius={15}
              fillColor={getStatusColor(site.status)}
              color="#ffffff"
              weight={3}
              opacity={1}
              fillOpacity={0.8}
              className={`protest-marker ${site.status === 'active' ? 'animate-pulse-corruption' : ''}`}
            >
              <Popup className="custom-popup">
                <div className="p-3 min-w-[250px]">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">
                      {site.name}
                    </h4>
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: getStatusColor(site.status) }}
                    >
                      {getStatusLabel(site.status)}
                    </span>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-600">Participants:</span>
                      <span className="font-semibold">
                        {site.participants.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">
                        {new Date(site.date).toLocaleDateString('en-PH', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold">
                        {site.location[0].toFixed(4)}, {site.location[1].toFixed(4)}
                      </span>
                    </div>
                    
                    {site.status === 'active' && (
                      <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
                        <p className="text-red-800 text-xs font-medium">
                          🔴 LIVE: Protest is currently active! Join now to demand justice for the 3.3T peso corruption scandal.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      
      {/* Status Legend */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-corruption-red animate-pulse"></div>
              <span className="text-gray-300 text-sm">Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-corruption-yellow"></div>
              <span className="text-gray-300 text-sm">Planned</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-gray-300 text-sm">Completed</span>
            </div>
          </div>
          <div className="text-corruption-yellow font-semibold text-sm">
            {protestSites.filter(s => s.status === 'active').length} Active Protests
          </div>
        </div>
      </div>
    </div>
  );
}