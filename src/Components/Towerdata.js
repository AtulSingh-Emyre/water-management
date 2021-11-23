import { Grid } from "@mui/material";
import TowerItem from "./TowerItem";

const Towerdata = () => {
    return (<div style={{backgroundColor:'#beacfa',padding:10, paddingBottom:10, margin:'auto', marginTop:15}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} style={{margin:'auto'}}>
  {['Tower A','Tower B','Tower C','Tower D'].map((item) => 
  <Grid item xs={6} lg={3} style={{margin:'auto'}}>
    <TowerItem towername={item} />
  </Grid>
  )

    }
</Grid>


    </div>)
}
export default Towerdata;