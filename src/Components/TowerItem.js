import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TowerButtonGroup from './TowerButtonGroup';


export default function TowerItem(props) {
  return (
    <Card sx={{ margin:3, borderRadius:5 }}>
      <CardContent style={{margin:'auto',textAlign:'center'}}>
          
        <Typography variant="h5" component="div">
        {props.towername}
        </Typography>
        <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
          Total water consumption
        </Typography>
        <div style={{margin:'auto'}}>
        <TowerButtonGroup />
        </div>
      </CardContent>
    </Card>
  );
}
