import { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { fetchSchools, School } from '../services/api';
import MapComponent from '../components/MapComponent';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Education() {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    const loadSchools = async () => {
      const data = await fetchSchools();
      setSchools(data);
    };
    loadSchools();
  }, []);

  const markers = schools.map(school => ({
    position: [school.position.lat, school.position.lon] as [number, number],
    title: school.nom_etablissement,
    description: `${school.type_etablissement} - ${school.nombre_d_eleves} élèves`,
  }));

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ height: '500px',  mb: 2 }}>
            <MapComponent 
              center={[46.603354, 1.888334]} 
              zoom={6} 
              markers={markers}
            />
          </Paper>
        </Grid>    
      </Grid>
    </div>
  );
}