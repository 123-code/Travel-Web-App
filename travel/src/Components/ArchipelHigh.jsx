import React from 'react';
import '../Styling/GalapagosTable.css';

const ArchipelHigh = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Standard Prices</th>
            <th className="columna-azul">7 nights</th>
            <th className="columna-azul">4 nights</th>
            <th className="columna-azul">3 nights</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>Ocean View Cabin</td>
            <td>USD 5,475</td>
            <td>USD 3,395</td>
            <td>USD 2,475</td>
          </tr>
        
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 87,600</td>
            <td>USD 54,320</td>
            <td>USD 39,600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ArchipelHigh;
