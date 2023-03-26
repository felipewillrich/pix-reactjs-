
import styled from "styled-components"


export function Navbar(){
    return(
        <NContainer className="container-fluid">
            <div className="row justify-content-center">
                <div className="row text-center">
                    <h1 className='titulo'>VLW ISA</h1>
                </div>
                
            </div>
        </NContainer>

    )
}
export default Navbar

const NContainer = styled.div`
background-repeat: no-repeat;
max-width: 100%;
height: 100px;
background-color: #5c5c5c;
.titulo{
    margin-top:25px;
}
`