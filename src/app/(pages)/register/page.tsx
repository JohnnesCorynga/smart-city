import Link from 'next/link'

const Register = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-gray-100">
      <h1 className="title text-4lx mb-6 text-center">Registre-se</h1>
      <div className="flex flex-wrap w-full sm:w-2/5  md:w-2/5 lg:w-3/5 gap-5 p-8 m-5 rounded shadow-lg">
        <input 
          type="text" 
          placeholder="Nome Completo" 
          className="flex border flex-1 min-w-[50%] p-2 rounded"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="flex border flex-1 p-2 w-80 rounded"
        />
        <input 
          type="password" 
          placeholder="Senha" 
          className="flex border flex-1 p-2 w-80 rounded"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Cadastrar</button>
        <p className="mt-4 text-center">
          Já tem uma conta? <Link href="/" className="text-blue-500">Faça login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register;
