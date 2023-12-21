import { Grid } from "@mui/material";
import RouterMonitor from "./RouterMoniter";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <RouterMonitor />
      </Grid>
    </Grid>
  );
}

export default App;
