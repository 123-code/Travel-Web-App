import React from 'react';
import '../Styling/GalapagosTable.css';

const AquaHigh = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Promotional Prices</th>
            <th className="columna-azul">7 nights</th>
          
          </tr>
        </thead>
        <tbody>
         
        <tr>
            <td>Lower Deck Cabin</td>
            <td>USD 4,225</td>
          </tr>
        
          <tr>
            <td>Main Upper Deck Cabin</td>
            <td>USD 4,425</td>
          </tr>
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 69,600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AquaHigh;
