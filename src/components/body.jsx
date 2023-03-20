
import VerCarta from './vercarta';
import Tarjeta from './tarjeta';
import Review from './carrusel';
import ContactInfo from './visitanos';

function Body (){

    return (
        <div className="principal">
            <h1 className='titulo'>Siempre listos para servirte sin falta!!</h1>
            <p className='textoprincipi'>Nos encargamos de obtener solo ingredientes de primera para poder ofreceros los mejores platos, ya sea en el restaurante, para llevar o a domicilio</p>
            <VerCarta/>
            <div className='contenedorTarjetas'>
                <Tarjeta numTarjetas = {4}/>
            </div>
            <div>
                <h1 className='titulo'>Nuestras reseñas!!</h1>
                <Review/>
            </div>
            <h1 className='titulo'>Visitanos!!</h1>
            <br />
            <ContactInfo/>
        </div>
    )

}

export default Body