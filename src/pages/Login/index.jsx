import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api'

function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()


    async function handleSubmit(event){
        event.preventDefault()

        try{
      const {data:token} =  await api.post('/login', {
            email:emailRef.current.value,
            password:passwordRef.current.value
        })



        localStorage.setItem('token', token)
        console.log(data) //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjMzYjhlN2U4NWY0NmFhMjRiZDAyNCIsImlhdCI6MTc0MDU5ODQ5MiwiZXhwIjoxNzQxMjAzMjkyfQ.CsFa8tlIdcLnLV5fq6liqEwCaFJiEsw1dOUwJEdDVyA'
        
        navigate('/listar-usuarios')

      } catch(err){
        alert("Senha ou Email incorreto")
      }    
    }

    return(
        <div className="max-w-md mt-15 ml-115 bg-white p-8 border border-gray-400 rounded-lg shadow-lg  " >
            <h2 className="text-2xl  font-bold mb-6 text-center text-gray-700">Login</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit} >
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 pt-2 border border-gray-300 rounded-md focus:outline-none" />
                <input ref={passwordRef} placeholder="Senha" type="password"className="w-full px-3 pt-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
            </form>
            <Link to={"/"} className="text-blue-800 hover:underline mt-4 block text-center">Não tem conta? Cadastre-se</Link>
        </div>
    )
}

export default Login