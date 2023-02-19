import { Container, Grow, Grid } from '@mui/material';
import { useEffect } from 'react';

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';

import { useAppDispatch } from '../../shared/hooks/useTypedSelector.hook';
import { discardPosts, getPosts } from '../../store/features/posts.feature';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());

    return () => {
      dispatch(discardPosts());
    };
  }, [dispatch]);

  return (
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
  );
};

export default Home;
