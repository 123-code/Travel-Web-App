import React from 'react';
import Papallacta from './Data.json';

const PapallactaMain = () => {
    return (
        <div style={{ paddingTop: '70px' }}>
            <h2 style={{Color:"black"}}>
                {Papallacta.Papallacta.main}
            </h2>
            <ul>
                <li>
                {Papallacta.Papallacta.Itinerario}
                </li>
           <li>
           {Papallacta.Papallacta.Incluye}
           </li>
           <li>
              {Papallacta.Papallacta.NoIncluye}
           </li>
           <li>
            {Papallacta.Papallacta.EQUIPONECESARIO}
           </li>

            </ul>
        </div>
    );
}

export default PapallactaMain;