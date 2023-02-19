import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "tss-react";

const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});

export default makeStyles()(() => ({
  appBar: {
    padding: '10px',
    margin: "0 0 25px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    color: "black",
  },
  image: {
    marginLeft: "15px",
  },
}));
