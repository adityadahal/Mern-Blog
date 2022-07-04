import "./App.css";
import { Grid } from "@mui/material";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";

function App() {
  return (
    <Grid container alignItems="center" justifyContent="center" display="flex">
      <Grid xs={12}>
        <Posts />
      </Grid>
      <Grid xs={12}>
        <Form />
      </Grid>
    </Grid>
  );
}

export default App;
