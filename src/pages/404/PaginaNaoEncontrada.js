import { Link } from "react-router-dom";
import styled from "styled-components";
import imgError from "../../assets/notbg.png";


export function PaginaNaoEncontrada(){
    return(
        <Container className="container">
            <div className="row justify-content-center">
                <div className="col-sm col-md-6 card text-center mb-5">
                    <img src={imgError} alt="Imagem404"/>
                    <h1 className="h1">Acabou nada...pq a vida sem vc nao existe :)</h1>
                
                <div className="row justify-content-center">
                    <div className="col-sm col-md-6 d-grid">
                        <Link to="/" className="btn btn-primary">Home</Link>
                    </div>
                </div>

                </div>
            </div>
                    
        </Container>
    )
}
 export const Container = styled.div`
    margin-top: 30px;
    .card {
        padding: 20px;
        background-color: #ffff;
        img {
            max-width: 550px;
        }
    }
    .btn-primary {
        background-color: #ffb703;
        color: #fefae0;
        border: 0;

        :hover {
            background-color: #fb8500;
        }
    }
    .h1 {
        color:#f4a261 ;
    }
 `