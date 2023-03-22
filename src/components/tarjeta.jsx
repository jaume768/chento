import '../tarjetastyle.css'

function Tarjeta({numTarjetas}){
    let tarjetas = []
    
    let tipos = ["PASTAS",
                "EMPANADAS",
                "PIZZAS",
                "POSTRES"]

    let fotos = ["https://cdn.glitch.global/80835a8d-bc40-4dc6-a2c9-443c37603011/pasta.jpeg?v=1678803574101",
                "https://cdn.glitch.global/80835a8d-bc40-4dc6-a2c9-443c37603011/empanadas.jpg?v=1678803591172",
                "https://cdn.glitch.global/80835a8d-bc40-4dc6-a2c9-443c37603011/cropped-Pizza-1-scaled-1.jpg?v=1678803679922",
                "https://cdn.glitch.global/80835a8d-bc40-4dc6-a2c9-443c37603011/creps.jpg?v=1678803575714"]

    let descripciones = ["Pasta recién hecha con los mejores ingredientes al dente para que junto a nosotros disfrutes la estancia o disfrutarla desde casa.",
                        "Ven y saborea autenticas empanadas argentinas recién hechas para ti.", 
                        "Masa con 48h fermentación junto a los ingredientes más frescos para traerte una pizza Chentisima!",
                        "Como con cada comida lo mejor se deja para el final pide tu postre y disfruta el dulce final de tu visita"]

    for(var i=0; i < numTarjetas; i++){
        tarjetas[i] = (
            <div className="tarjeta" key={i}>
                <div className="informacion">
                    <h2>{tipos[i]}</h2>
                </div>
                <img src={fotos[i]} alt="" />
                <div className="informacion">
                  <p>{descripciones[i]}</p>
                  <a href={"#/" + tipos[i].toLowerCase()}>Ver más</a>
                </div>
            </div>
        )
    }

    return tarjetas
}

export default Tarjeta