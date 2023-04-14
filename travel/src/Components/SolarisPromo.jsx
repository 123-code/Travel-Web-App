import React from 'react';
import '../Styling/GalapagosTable.css';

const SolarisPromo = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Precios Promocionales</th>
            <th className="columna-azul">6 noches</th>
            <th className="columna-azul">4 noches</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>Ocean View Single</td>
            <td>USD 5,050</td>
            <td>USD 3,450</td>
          </tr>
        
          <tr>
            <td>Charter - Maximum 16 pax</td>
            <td>USD 80,800</td>
            <td>USD 55,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SolarisPromo;
