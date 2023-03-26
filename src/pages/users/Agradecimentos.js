import { Link } from "react-router-dom"
import styled from "styled-components"
import Image from "../../assets/background.webp"
import notbg from "../../assets/notbg.png"

function Agradecimentos () {
    return(
        <Hagradecimentos className="container-fluid">
            <div className="row text-center">
            <div className="col">
                <h1 className="title">Achou que eu estava brincando</h1>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={notbg} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={notbg} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={notbg} alt="..."/>
                        </div>
                    </div>
                    </div>
            <Link to="/*" className="btn btb-primary" type="submit">Acabou :)</Link>
            </div>
        </div>
        </Hagradecimentos>
    )
}
export default Agradecimentos
const Hagradecimentos = styled.div`
background-image: url(${Image});
background-repeat: repeat;
width: 100%;
height: 550px;
background-size: contain;
background-position: center;

.title{
    color: #8a69bb;
}
.btn{
background-color: #fff;
color: #5c5c5c !important;

:hover {
    background-color: #8a69bb;
}

}
`
