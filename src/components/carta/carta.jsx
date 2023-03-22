import React, { useEffect, useState } from 'react';

function Carta(props){
  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/carta');
      const data = await response.json();
      if (props.tipo != "carta"){
        setData(data.filter(producto => producto.tipo === props.tipo));
      } else {
        setData(data)
      }
      
    }
    fetchData();
  }, []);

  const parentesisAbrir = "("
  const parentesisCerrar = ")"

  return (
    <div className='carta'>
      <h1>Carta</h1>
      <div className='productos'>
        {data.map(item => (
          <div key={item.id_producto} className="producto">
            <div className='prova'>
              <h3 className="producto-nombre">{item.nombre}</h3>
              <p className="producto-precio">{item.precio}€</p>
            </div>
            <p className='producto-descripcion'>{parentesisAbrir} {item.descripcion} {parentesisCerrar}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carta