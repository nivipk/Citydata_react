import { MapContainer, TileLayer } from 'react-leaflet';
import { Typography, Paper } from '@mui/material';
import 'leaflet/dist/leaflet.css';

export default function Health() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Map
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

                </MapContainer>
            </Paper>
        </div>
    );
}