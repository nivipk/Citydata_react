import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Typography, Paper } from '@mui/material';
import 'leaflet/dist/leaflet.css';

interface Hospital {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
}

export default function Health() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    setHospitals([
      { id: 1, name: 'Central Hospital', lat: 48.8566, lng: 2.3522, type: 'General' },
      { id: 2, name: 'Saint Marie', lat: 48.8606, lng: 2.3376, type: 'Specialized' },
    ]);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Health
      </Typography>
      <Paper sx={{ height: '500px', mb: 2 }}>
        <MapContainer
          center={[46.603354, 1.888334]} 
          zoom={6} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {hospitals.map((hospital) => (
            <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
              <Popup>
                <b>{hospital.name}</b>
                <br />
                Type: {hospital.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Paper>
    </div>
  );
}