import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import ListarUsarios from "./pages/Lista"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/listar-usuarios" element={<listarUsuarios/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
