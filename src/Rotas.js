import { Route, Routes } from "react-router-dom";
import { PaginaNaoEncontrada } from "./pages/404/PaginaNaoEncontrada";
import { Home } from "./pages/home/Home";
import Agradecimentos from "./pages/users/Agradecimentos";
import Momentos from "./pages/users/Momentos";
import Pedidos from "./pages/users/Pedidos"


export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Agradecimentos" element={<Agradecimentos />}/>
            <Route path="/Momentos" element={<Momentos />}/>
            <Route path="/Pedidos" element={<Pedidos />}/>
            
            <Route path="/*" element={<PaginaNaoEncontrada />}/>
        </Routes>
    )
}