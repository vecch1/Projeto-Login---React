import { useEffect } from "react"

import api from "../../services/api"

function ListarUsarios (){



  useEffect(() => {
     async  function loadUsers (){

        const token = localStorage.getItem('token')

        const {data: {users},} =  await api.get('/listar-usuarios', {
             headers: {Authorization: `Bearer ${token}`}
         }) 
         
     }


  loadUsers()
  }, [])


    return(
        <div>
            <h2>Listar Usuários</h2>
        </div>
    )
}

export default ListarUsarios