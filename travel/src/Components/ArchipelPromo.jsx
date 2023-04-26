import React from 'react';
import '../Styling/GalapagosTable.css';

const ArchipelPromo = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Promotional Prices</th>
            <th className="columna-azul">7 nights</th>
            <th className="columna-azul">4 nights</th>
            <th className="columna-azul">3 nights</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>Ocean View Cabin</td>
            <td>USD 4,325</td>
            <td>USD 2,675</td>
            <td>USD 1,925</td>
          </tr>
        
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 69,200</td>
            <td>USD 42,800</td>
            <td>USD 30,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ArchipelPromo;
