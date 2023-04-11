import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector() {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    dispatch({ type: 'SELECT_TOUR', payload: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Tour</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Tour"
          onChange={handleChange}
        >
          <MenuItem value={10}>Cuyabeno</MenuItem>
          <MenuItem value={20}>Papallacta</MenuItem>
          <MenuItem value={30}>Otavalo</MenuItem>
          <MenuItem value={30}>Mindo</MenuItem>
          <MenuItem value={30}>Quilotoa</MenuItem>
          <MenuItem value={30}>Cotopaxi-Hike</MenuItem>
          <MenuItem value={30}>Cotopaxi-Summit</MenuItem>
          <MenuItem value={30}>Galápagos-Standard</MenuItem>
          <MenuItem value={30}>Galápagos-High</MenuItem>
          <MenuItem value={30}>Galápagos-Promo</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
  return value;
}