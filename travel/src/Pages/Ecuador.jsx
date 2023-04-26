import React from "react";
import data from '../Data/Ecuador.json';

const EcuadorPage = () => {
    return (
        <>
        <h1>Highlands Page</h1>

        <p>{data.Ecuador}</p>
        <p>{data.Ecuador2}</p>
        </>
    );

}
export default EcuadorPage;