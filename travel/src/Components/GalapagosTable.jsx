import React from 'react';
import '../Styling/GalapagosTable.css';

const GalapagosTable = () => {
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
            <td>Balcony Stateroom</td>
            <td>USD 5,575</td>
            <td>USD 3,825</td>
          </tr>
          <tr>
            <td>Master Suite - Double</td>
            <td>USD 6,950</td>
            <td>USD 4,775</td>
          </tr>
          <tr>
            <td>Master Suite - Triple</td>
            <td>USD 6,395</td>
            <td>USD 4,395</td>
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

export default GalapagosTable;