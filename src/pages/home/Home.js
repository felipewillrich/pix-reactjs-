import { Link } from "react-router-dom"
import styled from "styled-components"
import Image from "../home/background.webp"

export function Home(){
  return(
    <HContainer className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PEDIDOS</h5>
              <p className="card-text">Ecreva aqui tbm se preferir haha</p>
              <Link className="btn btn-primary d-grid-3"  to="/Pedidos" type="submit">haha</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">MOMENTOS</h5>
              <p className="card-text">Uhull ecreva algo aqui</p>
              <Link className="btn btn-primary d-grid-3" to="/Momentos" type="submit">haha</Link>
            </div>
          </div>
        </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">AGRADECIMENTO</h5>
                <p className="card-text">Nao se esqueca de mim Uhull</p>
                <Link className="btn btn-primary d-grid-3" to="/Agradecimentos" type="submit">Te gosto muitao</Link>
              </div>
            </div>
          </div>
        </div>
    </HContainer>
  )
}
export default Home

export const HContainer = styled.div`
background-image: url(${Image});
background-repeat: repeat;
width: 100%;
height: 500px;
background-size: contain;
background-position: center;
margin-top: 23px;
.card {
  background: #8a69bb;
  opacity: 0.3;
    align-content: center;
    align-items: center;
    padding: 25px;
    color: #ffff;
}
.btn{
  background-color: #fff;
  --bs-text-opacity: 1;
  color: #8a69bb !important;
  border: none;
}
.card-title{
  color: #ffff;
}
`



