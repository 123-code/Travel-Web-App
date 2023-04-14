import React from 'react';
import '../Styling/GalapagosTable.css';

const EstandarSolaris = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Precios Estándar</th>
            <th className="columna-azul">6 noches</th>
            <th className="columna-azul">4 noches</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>Ocean View Single</td>
            <td>USD 5,575</td>
            <td>USD 3,825</td>
          </tr>
        
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 89,200</td>
            <td>USD 61,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EstandarSolaris;
