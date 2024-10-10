'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import L from 'leaflet';
import { problems as initialProblems } from '@/server/data'; // Ajuste o caminho conforme necessário
import { Problem } from '@/app/types/Problem';
import Image from 'next/image';

// Fixando ícones do Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
  // Usando os dados da constante problems diretamente
  const [problems] = useState<Problem[]>(initialProblems); // Define o estado com os problemas importados

  return (
    <MapContainer 
      center={[-3.8955, -42.2313]} // Define o centro do mapa
      zoom={14} 
      style={{ height: '70vh', width: '100%' }} // Ajusta o tamanho do mapa
    >
      {/* Camada de azulejo (mapa base) do OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marcadores dos problemas */}
      {problems.map((problem) => (
        <Marker key={problem.id} position={[problem.location.lat, problem.location.lng]}>
          <Popup>
            <div>
              <h2>{problem.description}</h2>
              {problem.photo && (
                <Image 
                  src={problem.photo} 
                  alt={problem.description} 
                  width={200}
                  height={200}
                />
              )}
              <p><strong>Endereço:</strong> {problem.addressComplete}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
