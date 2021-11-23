import { Button, Grid } from "@mui/material";

const Overview = () => {
    return (
    <div style={{backgroundColor:'#beacfa',padding:10, paddingBottom:10, margin:'auto'}}>
    <Grid container rowSpacing={1} style={{margin:'auto'}}>
  <Grid item xs={6} lg={2} style={{margin:'auto', textAlign:'center'}}>
    Total water consumption
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto', textAlign:'center'}}>
    Average
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto', textAlign:'center'}}>
    Water inlet
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto', textAlign:'center'}}>
    BWSSB
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto', textAlign:'center'}}>
    Common Consumptions
  </Grid>
  </Grid>
  <Grid container rowSpacing={1} style={{margin:'auto'}}>
  
  <Grid item xs={6} lg={2} style={{margin:'auto',textAlign:'center'}}>
  <Button variant="outlined" style={{backgroundColor:'white'}}>10,000LTS</Button>
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto',textAlign:'center'}}>
  <Button variant="outlined" style={{backgroundColor:'white'}}>10,000LTS</Button>
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto',textAlign:'center'}}>
  <Button variant="outlined" style={{backgroundColor:'white'}}>10,000LTS</Button>
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto',textAlign:'center'}}>
  <Button variant="outlined" style={{backgroundColor:'white'}}>10,000LTS</Button>
  </Grid>
  <Grid item xs={6} lg={2} style={{margin:'auto',textAlign:'center'}}>
  <Button variant="outlined" style={{backgroundColor:'white'}}>10,000LTS</Button>
  </Grid>

</Grid>
    
    
    </div>
    );

}


export default Overview;