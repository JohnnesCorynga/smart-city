'use client';
import { useEffect, useState } from 'react';
import { problems as initialProblems } from '@/server/data'; // Ajuste o caminho conforme necessário
import { Problem } from '@/app/types/Problem';
import Image from 'next/image';
import Link from 'next/link';

interface DetailsProps {
  params: {
    id: number; // ID deve ser número, pode ser string dependendo da sua configuração de rotas
  }
}

const Detalhes = (props: DetailsProps) => {
  const { id } = props.params; // Captura o ID do problema da query
  const [problem, setProblem] = useState<Problem | null>(null);

  useEffect(() => {
    // Verifica se o ID é válido
    if (id) {
      // Busca o problema na constante importada
      const foundProblem = initialProblems.find((p) => p.id == id);
      setProblem(foundProblem || null);
    }
  }, [id]);

  if (!problem) {
    return <div className='flex w-full flex-1 justify-center items-center'>Loading...</div>; // Exibe um loading enquanto busca os dados
  }

  return (
    <div className="p-8 flex flex-col w-full flex-1 justify-center items-center">
      <h1 className="text-4xl mb-4">{problem.description}</h1>
      
      {problem.photo && (
        <Image
          src={problem.photo}
          alt={problem.description}
          width={260} // Largura da imagem
          height={260} // Altura da imagem
          className="mb-4"
          objectFit="cover" // Garante que a imagem mantenha a proporção
        />
      )}
      
      <p><strong>Localização:</strong> Lat: {problem.location.lat}, Lng: {problem.location.lng}</p>
      <p><strong>Endereço Completo:</strong> {problem.addressComplete}</p>
      <p><strong>ID do Problema:</strong> {problem.id}</p>
      <p><strong>Foto:</strong> {problem.photo ? "Disponível" : "Nenhuma foto anexada"}</p>
      <p><strong>E-mail do usuário:</strong> {problem.email}</p> {/* Exibe o e-mail se disponível */}

      <Link className="m-5 button" href="/problems">Volta</Link>
    </div>
  );
};

export default Detalhes;
