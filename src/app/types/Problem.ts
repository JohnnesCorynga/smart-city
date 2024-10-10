// Problem.ts
export interface Problem {
  id: number;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  photo: string | null;
  addressComplete: string; // Propriedade para armazenar o endereço completo
  email: string; // Nova propriedade para armazenar o e-mail
}
