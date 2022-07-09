import "./App.css";
import { Grid } from "@mui/material";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Grid
        container
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid xs={12}>
          <Posts />
        </Grid>
        <Grid xs={12}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
