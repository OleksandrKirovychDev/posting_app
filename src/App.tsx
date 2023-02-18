import { Container, AppBar, Typography, Grow, Grid, Box } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useEffect } from "react";
import { useAppDispatch } from "./shared/hooks/useTypedSelector.hook";
import { getPosts } from "./store/features/posts.feature";

const App = () => {
  const { classes, cx } = useStyles();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={cx(classes.appBar)} position="static" color="inherit">
        <Typography className={cx(classes.heading)} variant="h2" align="center">
          Posting App
        </Typography>
        <img
          className={cx(classes.image)}
          src={require("./assets/logo.png")}
          alt="posting app"
          height="60"
          width="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignSelf="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Box>
  );
};

export default App;
