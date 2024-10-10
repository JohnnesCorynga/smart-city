'use client';
import Link from 'next/link';
import { useState } from 'react';
import { problems as initialProblems } from '@/server/data'; // Ajuste o caminho conforme necessário
import { Problem } from '@/app/types/Problem';
import Image from 'next/image';

const Problems = () => {
  const [problemas, setProblemas] = useState<Problem[]>(initialProblems); // Inicializando com problemas importados

  // Estado para cada campo do formulário
  const [description, setDescription] = useState('');
  const [addressComplete, setAddressComplete] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleAddProblema = () => {
    const newProblem: Problem = {
      id: problemas.length + 1,
      description,
      location: { lat: parseFloat(lat), lng: parseFloat(lng) }, // Convertendo strings para números
      photo: photo ? URL.createObjectURL(photo) : null, // Converte a foto para URL, se disponível
      addressComplete,
      email: "usuario@example.com", // Exemplo de e-mail, se necessário
    };
    setProblemas([...problemas, newProblem]);

    // Limpar o formulário
    setDescription('');
    setAddressComplete('');
    setLat('');
    setLng('');
    setPhoto(null);
  };

  const handleUploadFoto = (file: File) => {
    setPhoto(file); // Armazena a imagem
  };

  return (
    <div className='w-full flex flex-col p-8'>
      <Link className='button w-min text-nowrap' href="/map">Ver no Mapa</Link>
      <div className="py-5 overflow-auto flex w-full flex-col flex-1">
        {/* Formulário de cadastro */}
        <div className="flex flex-wrap w-full sm:w-3/5  md:w-4/5 gap-5 p-8 m-auto mb-32 rounded shadow-lg">
          <h1 className="title w-full text-4xl mb-6">Cadastrar Problema</h1>
          <input
            type="text"
            placeholder="Descreva o problema"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex border flex-1 min-w-[45%] p-2 roundedrounded"
          />

          <input
            type="text"
            placeholder="Endereço Completo"
            value={addressComplete}
            onChange={(e) => setAddressComplete(e.target.value)}
            className="flex border flex-1 min-w-[45%] p-2 roundedrounded"
          />

          <input
            type="text"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="flex border flex-1 min-w-[45%] p-2 roundedrounded"
          />

          <input
            type="text"
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="flex border flex-1 min-w-[45%] p-2 roundedrounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && handleUploadFoto(e.target.files[0])}
            className="flex border flex-1 min-w-[45%] p-2 roundedrounded"
          />

          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleAddProblema}
          >
            Adicionar Problema
          </button>
        </div>

        {/* Lista de problemas */}
        <div className='flex flex-col w-4/5 m-auto'>

          <h1 className="title text-4xl mb-6">Lista de Problemas</h1>
          <ul className="space-y-4">
            {problemas.length > 0 ? (
              problemas.map((p) => (
                <li key={p.id} className="border p-4 rounded">
                  <Link href={`/problems/${p.id}`} className="cursor-pointer flex gap-5 justify-between">
                    <div>
                      <p>{p.description}</p>
                      <p><strong>Endereço:</strong> {p.addressComplete}</p>
                      <Link className='text-blue-500' href={`/problems/${p.id}`}>Ver Mais</Link>
                    </div>
                    <div>
                      {p.photo && (
                        <Image
                          src={p.photo}
                          alt={p.description}
                          className="mt-2"
                          width={150}
                          height={150}
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <div>Não veio nada</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Problems;
