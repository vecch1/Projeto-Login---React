import { Link } from "react-router-dom"

function Cadastro(){

    return(
        <div className="max-w-md mt-15 ml-115 bg-white p-8 border border-gray-400 rounded-lg shadow-lg  " >
            <h2 className="text-2xl  font-bold mb-6 text-center text-gray-700">Cadastro</h2>
            <form className="flex flex-col gap-5">
                <input placeholder="Nome"  type="text" className="w-full px-3 pt-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input placeholder="Email" type="email" className="w-full px-3 pt-2 border border-gray-300 rounded-md focus:outline-none" />
                <input placeholder="Senha" type="password"className="w-full px-3 pt-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600">Cadastrar-se</button>
            </form>
            <Link to={"/login"} className="text-blue-800 hover:underline mt-4 block text-center">Já possui uma conta? Faça login</Link>
        </div>
    )
}

export default Cadastro