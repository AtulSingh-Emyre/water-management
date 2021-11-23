import { Button, Grid } from "@mui/material";

const TowerButtonGroup = () => {
    return (
    <div style={{margin:'auto'}}>
    <Grid container rowSpacing={1} style={{margin:'auto'}}>
  {
      ['Device 1','Device 2','Device 3','Device 4','Device 5','Device 6'].map((item) => 
      <Grid item xs={6} style={{margin:'auto'}}>
          <Button variant="contained" style={{maxWidth:'100%', fontSize:10}}>{item}</Button>
      </Grid>
  
      )
  }
  </Grid>
    </div>
    );

}


export default TowerButtonGroup;