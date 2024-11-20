import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: [number, number];
  zoom: number;
  markers: Array<{
    position: [number, number];
    title: string;
    description?: string;
  }>;
}

export default function MapComponent({ center, zoom, markers }: MapProps) {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <h3>{marker.title}</h3>
            {marker.description && <p>{marker.description}</p>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}