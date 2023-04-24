import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function CheckoutButton() {
    //--TODO cambiar navigate con el path de la pagina de checkout
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" style={{ backgroundColor: 'gray' }} onClick={() => { navigate('/form') }}>
       Pay with ETH 
      </Button>
    </div>
  );
}
