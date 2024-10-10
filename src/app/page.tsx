import Image from 'next/image'
import Link from 'next/link'
import ImageCity from "@/assets/images/city-image.png"

const Login = () => {
  return (
    <div className="relative flex h-screen text-slate-700">
      {/* Div da imagem */}
      <div className="absolute inset-0 md:w-3/5 md:relative">
        <Image 
          src={ImageCity} 
          alt="Cidade" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
      </div>

      {/* Div do formulário de login */}
      <div className="relative z-10 w-11/12 md:w-2/5 m-auto h-min p-6">
        <div className="flex flex-col justify-center items-center bg-gray-100 bg-opacity-80 p-3 md:p-6 rounded-lg md:bg-opacity-70 lg:bg-opacity-50">
          <h1 className="text-3xl mb-2 text-slate-700">LOGIN</h1>
          <p className="mb-6 text-slate-500">Smate City: Cidade Segura</p>
          <label htmlFor="email" className='w-full flex flex-1 flex-col font-bold text-slate-600'>
            Email
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-4 rounded font-light"
            />
          </label>
          <label htmlFor="senha" className='w-full flex flex-col font-bold text-slate-600'>
            Senha
          <input
            type="password"
            placeholder="Senha"
            className="border p-2 w-full  mb-4 rounded font-light"
          />
          </label>
          <Link href="/problems" className="button bg-blue-500 px-4 text-center py-2 rounded">Entrar</Link>
          <p className="mt-4">
            Não tem uma conta? <Link href="/register" className="text-blue-500">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;
