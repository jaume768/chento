import { useState, useEffect, useRef } from 'react';

function Carta(props){
  
  const [data, setData] = useState([]);
  const prevTipoRef = useRef('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/carta');
      const data = await response.json();
      if (props.tipo != "carta"){
        setData(data.filter(producto => producto.tipo === props.tipo));
      } else {
        setData(data.sort((a, b) => a.tipo.localeCompare(b.tipo)))
      }
      
    }
    fetchData();
  }, []);

  let tipoCarta = props.tipo

  return (
    <div className='carta'>
       <h1>{props.tipo === "carta" ? "CARTA" : tipoCarta.toUpperCase()}</h1>
      <div className='productos'>
        {data.map((item, index) => {
          const showHeader = prevTipoRef.current !== item.tipo;
          prevTipoRef.current = item.tipo;
          return (
            <div key={item.id_producto} className="producto">
              {showHeader && <h1>{item.tipo.toUpperCase()}</h1>}
              <div className='prova'>
                <h3 className="producto-nombre">{item.nombre}</h3>
                <p className="producto-precio">{item.precio}€</p>
              </div>
              <p className='producto-descripcion'>( {item.descripcion} )</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carta