import { Grid, Paper, Typography } from '@mui/material';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Transport() {
  const metroLine = [
    [48.8566, 2.3522],
    [48.8606, 2.3376],
    [48.8646, 2.3226],
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Transport
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
              <Polyline
                positions={metroLine}
                color="blue"
                weight={3}
              />
            </MapContainer>
          </Paper>
        </Grid>        
      </Grid>
    </div>
  );
}