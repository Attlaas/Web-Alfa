// Puntos del mapa de cobertura.
// La base es el único punto real del proyecto; los nodos de cobertura marcan
// dónde puede instalarse ALFA (no son oficinas, sedes ni usuarios).
export const BASE = {
  id: 'base',
  kind: 'base',
  label: 'Base de operaciones',
  city: 'Madrid',
  country: 'España',
  lat: 40.4168,
  lng: -3.7038,
  note: 'Aquí se escribe, se prueba y se mantiene ALFA: una persona, una IA y ningún despacho.',
};

const REGION_NOTE = 'Descarga abierta: sin oficina local y sin servidores en la zona.';

export const COVERAGE = [
  { id: 'na', kind: 'cobertura', label: 'Norteamérica', lat: 39.8, lng: -98.6, note: REGION_NOTE },
  { id: 'sa', kind: 'cobertura', label: 'Sudamérica', lat: -14.2, lng: -58.4, note: REGION_NOTE },
  {
    id: 'eu',
    kind: 'cobertura',
    label: 'Europa',
    lat: 50.1,
    lng: 14.4,
    note: 'Descarga abierta: la zona más cercana a la base y donde se hacen las pruebas.',
  },
  { id: 'af', kind: 'cobertura', label: 'África', lat: 3.4, lng: 17.6, note: REGION_NOTE },
  { id: 'as', kind: 'cobertura', label: 'Asia', lat: 32.6, lng: 100.9, note: REGION_NOTE },
  { id: 'oc', kind: 'cobertura', label: 'Oceanía', lat: -25.6, lng: 143.2, note: REGION_NOTE },
];

export const NODES = [BASE, ...COVERAGE];

export const MAP_SOURCE = '© colaboradores de OpenStreetMap';
