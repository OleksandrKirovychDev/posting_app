import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "tss-react";

const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});

export default makeStyles()((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
