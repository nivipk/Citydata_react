import axios from 'axios';

const BASE_URL = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets';

export interface School {
  identifiant_de_l_etablissement: string;
  nom_etablissement: string;
  type_etablissement: string;
  statut_public_prive: string;
  adresse_1: string;
  code_postal: string;
  nom_commune: string;
  telephone: string;
  mail: string;
  nombre_d_eleves: number;
  position: {
    lat: number;
    lon: number;
  };
}

export const fetchSchools = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fr-en-annuaire-education/records`);
    return response.data.results as School[];
  } catch (error) {
    console.error('Error fetching schools:', error);
    return [];
  }
};
