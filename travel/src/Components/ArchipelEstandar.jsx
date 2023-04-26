import React from 'react';
import '../Styling/GalapagosTable.css';

const ArchipelEstandar = () => {
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
            <td>USD 4,850</td>
            <td>USD 2,995</td>
            <td>USD 2,175</td>
          </tr>
        
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 77,600</td>
            <td>USD 47,920</td>
            <td>USD 34,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ArchipelEstandar;
