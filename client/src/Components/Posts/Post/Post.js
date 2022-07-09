import React from "react";
import { Typography } from "@mui/material";
import useStyles from "./styles";

const classes = useStyles();

function Post() {
  return (
    <div>
      <Typography className={classes.heading}>This is React</Typography>
    </div>
  );
}

export default Post;
