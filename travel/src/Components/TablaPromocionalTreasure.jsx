import React from 'react';
import '../Styling/GalapagosTable.css';

const TablaPromocionaltreasure = () => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th className="columna-azul">Promotional Prices</th>
            <th className="columna-azul">6 nights</th>
            <th className="columna-azul">4 nights</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Balcony Stateroom</td>
            <td>USD 5,050</td>
            <td>USD 3,450</td>
          </tr>
          <tr>
            <td>Master Suite - Double</td>
            <td>USD 6,325</td>
            <td>USD 4,325</td>
          </tr>
          <tr>
            <td>Master Suite - Triple</td>
            <td>USD 7,895</td>
            <td>USD 5,395</td>
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

export default TablaPromocionaltreasure;
