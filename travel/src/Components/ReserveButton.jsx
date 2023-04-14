import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ReserveButton() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" style={{ backgroundColor: '#03244D' }} onClick={() => { navigate('/form') }}>
        Reservar este tour
      </Button>
    </div>
  );
}
