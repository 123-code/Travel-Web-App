import React from 'react';
import '../Styling/GalapagosTable.css';

const TablaHightreasure = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Precios Temporada Alta</th>
            <th className="columna-azul">6 noches</th>
            <th className="columna-azul">4 noches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Balcony Stateroom</td>
            <td>USD 6,395</td>
            <td>USD 4,425</td>
          </tr>
          <tr>
            <td>Master Suite - Double</td>
            <td>USD 7,995</td>
            <td>USD 5,550</td>
          </tr>
          <tr>
            <td>Master Suite - Triple</td>
            <td>USD 7,350</td>
            <td>USD 5,095</td>
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

export default TablaHightreasure;
