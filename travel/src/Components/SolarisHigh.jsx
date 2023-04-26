import React from 'react';
import '../Styling/GalapagosTable.css';

const SolarisHigh = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">high season prices </th>
            <th className="columna-azul">6 nights</th>
            <th className="columna-azul">4 nights</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>Ocean View Single</td>
            <td>USD 6,395</td>
            <td>USD 4,425</td>
          </tr>
        
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 102,320</td>
            <td>USD 70,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SolarisHigh;
