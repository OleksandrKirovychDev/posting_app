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
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));
