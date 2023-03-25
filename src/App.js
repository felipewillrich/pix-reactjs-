import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Componentes/navbar/Navbar";
import Rotas  from "./Rotas";
import { ToastContainer} from 'react-toastify';



function App() {
  return (
   <BrowserRouter>
   <ToastContainer>

   </ToastContainer>
    <Navbar></Navbar>

    <Rotas></Rotas>
   </BrowserRouter>
  );
}

export default App;