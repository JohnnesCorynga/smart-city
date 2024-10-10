'use client'
import dynamic from 'next/dynamic';
// const Map = dynamic(() => import('@/components/itemsPages/Map'), { ssr: false });

// Em vez de importar diretamente o Map
const Map = dynamic(() => import('@/components/itemsPages/Map'), {
  ssr: false, // Desabilita a renderização do lado do servidor
});
const MapaPage = () => {
  return (
    <div className='p-5 h-min w-full'>
      <div>
        <h1 className='title'>Mapa de Problemas</h1>
      </div>
      <div className="h-min w-full">
        <Map />
      </div>
    </div>
  );
};

export default MapaPage;
