import { Link } from "react-router-dom"

function Cadastro(){

    return(
        <div className="" >
            <h2>Cadastro</h2>
            <form>
                <input placeholder="Nome"  type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Senha" type="password" />
                <button>Cadastrar-se</button>
            </form>
            <Link to={"/login"} >Já possui uma conta? Faça login</Link>
        </div>
    )
}

export default Cadastro