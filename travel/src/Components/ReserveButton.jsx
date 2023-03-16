import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


export default function ReserveButton(){
    const navigate = useNavigate();
    return(
        <div>
            <Button variant="contained" color="success" onClick={()=>{navigate("/form")}}>
            Reservar este tour
            </Button>
        </div>
    )

}