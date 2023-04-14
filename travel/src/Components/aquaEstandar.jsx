import React from 'react';
import '../Styling/GalapagosTable.css';

const AquaEstandar = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Precios Estándar</th>
            <th className="columna-azul">7 noches</th>
          
          </tr>
        </thead>
        <tbody>
         
        <tr>
            <td>Lower Deck Cabin</td>
            <td>USD 4,595</td>
          </tr>
        
          <tr>
            <td>Main Upper Deck Cabin</td>
            <td>USD 4,795</td>
          </tr>
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 75,520</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AquaEstandar;
