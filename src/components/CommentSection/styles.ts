import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "tss-react";

const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});

export default makeStyles()((theme) => ({
  commentsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    marginTop: "10px",
  },
}));
