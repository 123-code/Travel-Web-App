import React from 'react';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



import '../../Styling/Rates.css'
export default function ImportantNotes() {

   
    return (
        <div style={{ display: 'flex' }} >
        <Paper elevation={3}>
        <Card sx={{ maxWidth: 550 }} variant="outlined">
          <CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/download_159.jpeg"
        title="cotopaxi"
        />
                <Typography variant="h5" component="div">
                Important notes
                </Typography>

                <ul>
                <li>
                <Typography variant="h6" component="div">
                Single Supplement: 50% surcharge with a maximum of 2 single cabins per departure. Any additional single cabin
                 can be booked at a 100% surcharge.
                 </Typography >
                </li>


                <li>
                <Typography variant="h6" component="div">
                Advanced open water (or equivalent) certificate, and a minimum of 50 immersions required to join any diving
                  liveaboard.
                 </Typography >
                </li>



                <li>
                <Typography variant="h6" component="div">
                Diving insurance required to join any diving liveaboard.
                 </Typography >
                </li>
            </ul>
          </Card>



          <Card sx={{ maxWidth: 550 }} variant="outlined">
          <CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/download_159.jpeg"
        title="cotopaxi"
        />
                <Typography variant="h5" component="div">
                Diving liveaboard includes
                </Typography>

                <ul>
                <li>
                <Typography variant="h6" component="div">
                Lodging on board in a cabin with private facilities.
                 </Typography >
                </li>


                <li>
                <Typography variant="h6" component="div">
                Three meals per full-day; unlimited water, coffee and tea.
                 </Typography >
                </li>



                <li>
                <Typography variant="h6" component="div">
                All excursions as mentioned in the itinerary with one English speaking certified dive guide per 8 guests.
                 </Typography >
                </li>

                <li>
                <Typography variant="h6" component="div">
                Airport-yacht-airport transfers (only guaranteed if passengers arrive at the scheduled meeting point, date and
                time).
                 </Typography >
                </li>



                <li>
                <Typography variant="h6" component="div">
                12L Tanks for air, Weights, Belts, Scuba safety equipment (Personal Marine rescue GPS), Towels.
                 </Typography >
                </li>
            </ul>
          </Card>


          <Card sx={{ maxWidth: 550 }} variant="outlined">
          <CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/download_159.jpeg"
        title="cotopaxi"
        />
                <Typography variant="h5" component="div">
                Diving liveaboard does not Include
                </Typography>

                <ul>
                <li>
                <Typography variant="h6" component="div">
                Roundtrip flight to Galapagos Islands.
                 </Typography >
                </li>


                <li>
                <Typography variant="h6" component="div">
                Galapagos National Park entrance fee (USD 100 pp).
                 </Typography >
                </li>



                <li>
                <Typography variant="h6" component="div">
                Transit Control Card (USD 20 pp).
                 </Typography >
                </li>

                <li>
                <Typography variant="h6" component="div">
                Full dive equipment rental (BCD, regulator, mask, fins, 7mm wetsuits, hoods, gloves, boots, torch).
                 </Typography >
                </li>



                <li>
                <Typography variant="h6" component="div">
                Nitrox (USD 150 pp),  Soft and alcoholic drinks.
                 </Typography >
                </li>


                <li>
                <Typography variant="h6" component="div">
                Travel insurance (Medical coverage, Trip cancellation & Dive Accident insurance) and other items of personal
                nature.
                 </Typography >
                </li>
            </ul>
          </Card>
        </Paper>
        </div>
    );
}


   