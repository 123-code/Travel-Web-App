import React from 'react';
import '../Styling/GalapagosTable.css';

const AquaHigh = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Precios Temporada Alta</th>
            <th className="columna-azul">7 noches</th>
          
          </tr>
        </thead>
        <tbody>
         
        <tr>
            <td>Lower Deck Cabin</td>
            <td>USD 4,795</td>
          </tr>
        
          <tr>
            <td>Main Upper Deck Cabin</td>
            <td>USD 4,995</td>
          </tr>
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 78,720</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AquaHigh;
