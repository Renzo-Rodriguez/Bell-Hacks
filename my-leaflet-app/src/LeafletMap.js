import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = L.map('leaflet-map').setView([51.505, -0.09], 13);
    mapRef.current = map;

    // Add a base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Use the default Leaflet marker icon
    const markerIcon = new L.Icon({
      iconUrl: process.env.PUBLIC_URL + '/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    // Add marker with custom icon
    const marker = L.marker([51.505, -0.09], { draggable: true, icon: markerIcon }).addTo(map);
    markerRef.current = marker;

    // Event listener for marker dragend
    marker.on('dragend', () => {
      const { lat, lng } = marker.getLatLng();
      console.log(`Marker dropped at: ${lat}, ${lng}`);
    });

    return () => {
      // Cleanup function to remove the map when the component is unmounted
      map.remove();
    };
  }, []);

  return <div id="leaflet-map" style={{ height: '100vh', width: '50%' }} />;
};

export default LeafletMap;
