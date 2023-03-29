import { Table,TableHead,TableRow,TableCell,TableBody } from '@mui/material';

export  function GalapagosTable({tablerow}) {
    return (
        <div>
            <Table  sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
            <TableCell>STANDARD RATES</TableCell>
            <TableCell align="right">6-Night Cruise</TableCell>
            <TableCell align="right">retail-rates</TableCell>
            <TableCell align="right">agency-rates</TableCell>
            <TableCell align="right">4-Night Cruise</TableCell>
            <TableCell align="right">retail-rates</TableCell>
            <TableCell align="right">agency-rates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {tablerow.map((row,index)=>{
                return(
                    <TableRow>
                        <TableCell key={index}>{row.tourName}</TableCell>
                        <TableCell key={index}>{row.sixNightRetail}</TableCell>
                        <TableCell key={index}>{row.sixNightAgency}</TableCell>
                        <TableCell key={index}>{row.fourNightRetail}</TableCell>
                        <TableCell key={index}>{row.FourNightAgency}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
            </Table>
        </div>
    );
}



export function CreateData(tourName,sixNightRetail,sixNightAgency,fourNightRetail,FourNightAgency){
    return {tourName,sixNightRetail,sixNightAgency,fourNightRetail,FourNightAgency};
}