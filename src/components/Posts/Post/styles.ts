import { useTheme } from "@mui/material/styles";
import { createMakeAndWithStyles } from "tss-react";

const { makeStyles } = createMakeAndWithStyles({
  useTheme,
});

export default makeStyles()(() => ({
  fullHeightCard: {
    height: "300px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  title: {
    padding: "4px 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
}));
