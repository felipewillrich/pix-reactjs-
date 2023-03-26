import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Componetes/navbar/Navbar";
import { Rotas } from "./Rotas";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Componetes/footer/Footer";


function App() {
  return (
   <BrowserRouter>
   <ToastContainer />
    <Navbar />
    <Rotas />
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
